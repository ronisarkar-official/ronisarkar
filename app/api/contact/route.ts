import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// In-memory rate limiting map: IP -> array of timestamps (ms)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
	const now = Date.now();
	const timestamps = rateLimitMap.get(ip) || [];

	// Filter timestamps within the rolling 10-minute window
	const validTimestamps = timestamps.filter(
		(ts) => now - ts < RATE_LIMIT_WINDOW_MS
	);

	if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
		return true;
	}

	validTimestamps.push(now);
	rateLimitMap.set(ip, validTimestamps);
	return false;
}

export async function POST(req: Request) {
	try {
		// Identify client IP address
		const forwarded = req.headers.get('x-forwarded-for');
		const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';

		if (isRateLimited(ip)) {
			return NextResponse.json(
				{ error: 'Too many message requests. Please wait a few minutes before trying again.' },
				{ status: 429 }
			);
		}

		const body = await req.json();
		const { firstName, lastName, email, message, honey } = body;

		// Honeypot bot protection
		if (honey) {
			return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
		}

		if (!firstName?.trim() || !email?.trim() || !message?.trim()) {
			return NextResponse.json(
				{ error: 'Please fill in all required fields (First name, Email, Message).' },
				{ status: 400 }
			);
		}

		const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRe.test(email.trim())) {
			return NextResponse.json(
				{ error: 'Please provide a valid email address.' },
				{ status: 400 }
			);
		}

		const emailUser = process.env.EMAIL_USER;
		const emailPass = process.env.EMAIL_PASS;
		const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'ronisarkar10938@gmail.com';

		if (!emailUser || !emailPass) {
			console.error('Email credentials missing in environment variables.');
			return NextResponse.json(
				{ error: 'Server configuration error. Please try again later.' },
				{ status: 500 }
			);
		}

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: emailUser,
				pass: emailPass,
			},
		});

		const fullName = `${firstName.trim()} ${lastName?.trim() ?? ''}`.trim();
		const safeMessage = String(message)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/\n/g, '<br/>');

		await transporter.sendMail({
			from: `"${fullName} (Portfolio Contact)" <${emailUser}>`,
			to: recipientEmail,
			replyTo: `"${fullName}" <${email.trim()}>`,
			subject: `New Portfolio Contact Message from ${fullName}`,
			html: `
				<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; color: #1f2937;">
					<h2 style="font-size: 20px; font-weight: 700; margin-top: 0; color: #111827; border-bottom: 2px solid #6366f1; padding-bottom: 12px;">
						New Portfolio Contact Message
					</h2>
					<table style="width: 100%; margin-bottom: 20px; border-collapse: collapse;">
						<tr>
							<td style="padding: 8px 0; font-weight: 600; width: 100px; color: #4b5563;">From:</td>
							<td style="padding: 8px 0; color: #111827;">${fullName}</td>
						</tr>
						<tr>
							<td style="padding: 8px 0; font-weight: 600; color: #4b5563;">Email:</td>
							<td style="padding: 8px 0;"><a href="mailto:${email.trim()}" style="color: #6366f1; text-decoration: none;">${email.trim()}</a></td>
						</tr>
					</table>
					<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 16px; border-radius: 8px; font-size: 15px; line-height: 1.6;">
						<strong style="display: block; margin-bottom: 8px; color: #374151;">Message:</strong>
						${safeMessage}
					</div>
					<p style="font-size: 12px; color: #9ca3af; margin-top: 24px; text-align: center;">
						This message was sent from your portfolio contact form.
					</p>
				</div>
			`,
		});

		return NextResponse.json({ success: true, message: 'Message sent successfully!' });
	} catch (error: any) {
		console.error('Error sending email via Nodemailer:', error);
		return NextResponse.json(
			{ error: error?.message || 'Failed to send message. Please try again later.' },
			{ status: 500 }
		);
	}
}
