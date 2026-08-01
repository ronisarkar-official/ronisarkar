'use client';

import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { toast, Toaster } from 'sonner';
import { Send } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Label } from '@/components/ui/Label';
import { Button } from '@/components/ui/Button';
import SpringAnimated from '@/components/SpringAnimated';

type FormState = {
	firstName: string;
	lastName: string;
	email: string;
	message: string;
	honey: string;
};

type FormErrors = {
	firstName?: boolean;
	email?: boolean;
	message?: boolean;
};

export default function Contact() {
	const formRef = useRef<HTMLFormElement | null>(null);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState<FormErrors>({});
	const [form, setForm] = useState<FormState>({
		firstName: '',
		lastName: '',
		email: '',
		message: '',
		honey: '',
	});

	function handleChange(
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) {
		const { name, value } = e.target;
		const key = name as keyof FormState;
		setForm((p) => ({ ...p, [key]: value }));
		if (errors[key as keyof FormErrors]) {
			setErrors((p) => ({ ...p, [key]: false }));
		}
	}

	function validate() {
		const newErrors: FormErrors = {};
		if (form.honey) return { ok: false, message: 'Spam detected', errors: {} };

		if (!form.firstName.trim()) newErrors.firstName = true;
		if (!form.email.trim()) newErrors.email = true;
		if (!form.message.trim()) newErrors.message = true;

		const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (form.email.trim() && !emailRe.test(form.email.trim())) {
			newErrors.email = true;
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			if (newErrors.email && form.email.trim() && !emailRe.test(form.email.trim())) {
				return { ok: false, message: 'Please enter a valid email address.', errors: newErrors };
			}
			return {
				ok: false,
				message: 'Please fill in all required fields.',
				errors: newErrors,
			};
		}

		setErrors({});
		return { ok: true, errors: {} };
	}

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const v = validate();
		if (!v.ok) return toast.error(v.message || 'Validation failed');

		setLoading(true);
		const toastId = toast.loading('Sending message...');

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(form),
			});

			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.error || 'Failed to send message.');
			}

			setLoading(false);
			toast.success('Message sent — thank you!', { id: toastId });
			setForm({
				firstName: '',
				lastName: '',
				email: '',
				message: '',
				honey: '',
			});
			setErrors({});
			formRef.current?.reset();
		} catch (err: any) {
			console.error('Email send error:', err);
			setLoading(false);
			toast.error(err?.message || 'Something went wrong. Try again later.', {
				id: toastId,
			});
		}
	}

	return (
		<article className="flex min-h-[calc(100vh-12rem)] flex-col gap-8 pb-16 pt-8">
			<Toaster position="top-right" />

			<div className="flex flex-col gap-2 stagger-item">
				<h1 className="title text-4xl font-bold">Get in touch</h1>
				<p className="text-muted-foreground">
					Have a project in mind or just want to say hi? Drop me a message.
				</p>
			</div>

			<div className="w-full max-w-xl mx-auto">
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="space-y-6"
					aria-label="Contact form"
					noValidate>
					<div aria-hidden="true" className="sr-only">
						<label>
							Don&apos;t fill this out if you are human
							<input
								type="text"
								name="honey"
								value={form.honey}
								onChange={handleChange}
								autoComplete="off"
								tabIndex={-1}
							/>
						</label>
					</div>

					<div className="flex flex-col gap-6 sm:flex-row">
						<div className="flex-1 space-y-2 stagger-item">
							<Label htmlFor="firstName">First name *</Label>
							<Input
								id="firstName"
								name="firstName"
								type="text"
								value={form.firstName}
								onChange={handleChange}
								required
								aria-invalid={errors.firstName}
								className={errors.firstName ? 'border-destructive focus-visible:ring-destructive' : ''}
								placeholder="John"
							/>
						</div>
						<div className="flex-1 space-y-2 stagger-item">
							<Label htmlFor="lastName">Last name</Label>
							<Input
								id="lastName"
								name="lastName"
								type="text"
								value={form.lastName}
								onChange={handleChange}
								placeholder="Doe"
							/>
						</div>
					</div>

					<div className="space-y-2 stagger-item">
						<Label htmlFor="email">Email *</Label>
						<Input
							id="email"
							name="email"
							type="email"
							value={form.email}
							onChange={handleChange}
							required
							aria-invalid={errors.email}
							className={errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}
							placeholder="john@example.com"
						/>
					</div>

					<div className="space-y-2 stagger-item">
						<Label htmlFor="message">Message *</Label>
						<Textarea
							id="message"
							name="message"
							value={form.message}
							onChange={handleChange}
							required
							aria-invalid={errors.message}
							className={`min-h-[160px] resize-y ${errors.message ? 'border-destructive focus-visible:ring-destructive' : ''}`}
							placeholder="What's on your mind?"
						/>
					</div>

					<SpringAnimated className="stagger-item">
						<Button
							type="submit"
							disabled={loading}
							className="w-full"
							aria-busy={loading}
							aria-live="polite">
							{loading ? (
								<>
									<svg
										className="h-4 w-4 animate-spin"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true">
										<circle
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
											className="opacity-25"
										/>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
										/>
									</svg>
									Sending...
									<span className="sr-only">Sending</span>
								</>
							) : (
								<>
									Send message
									<Send className="size-4" />
								</>
							)}
						</Button>
					</SpringAnimated>
				</form>
			</div>
		</article>
	);
}
