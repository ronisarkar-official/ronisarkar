import { getSiteSettings, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import Greeting from '@/components/Greeting';
import { LinkPreview } from '@/components/ui/link-preview';

interface AboutProps {
	settings?: any;
}

const About = async ({ settings: initialSettings }: AboutProps = {}) => {
	const proseClasses =
		'prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl prose-lead:text-base prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-edge';

	const settings =
		initialSettings !== undefined ? initialSettings : await getSiteSettings();

	// Custom components for Portable Text
	const components = {
		marks: {
			link: ({ value, children }: any) => {
				const href = value?.href;
				if (!href) return <>{children}</>;

				const target = value?.blank !== false ? '_blank' : undefined;
				const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

				const isExternalWeb = /^https?:\/\//i.test(href);

				if (!isExternalWeb) {
					return (
						<a href={href} target={target} rel={rel}>
							{children}
						</a>
					);
				}

				const previewImg =
					value?.previewImageUrl ||
					(value?.previewImage?.asset ? urlFor(value.previewImage).url() : undefined);

				if (previewImg) {
					return (
						<LinkPreview
							url={href}
							isStatic={true}
							imageSrc={previewImg}
							target={target}
							rel={rel}
							className="font-medium underline underline-offset-4 inline">
							{children}
						</LinkPreview>
					);
				}

				return (
					<LinkPreview
						url={href}
						target={target}
						rel={rel}
						className="font-medium underline underline-offset-4 inline">
						{children}
					</LinkPreview>
				);
			},
		},
	};

	return (
		<section className="space-y-4" id="about">
			<div className="space-y-4">
				<h2 className="text-3xl font-semibold text-foreground">
					<Greeting />
				</h2>
				<div className={proseClasses}>
					{settings?.aboutContent ? (
						<PortableText value={settings.aboutContent} components={components} />
					) : (
						<>
							<p>
								I&apos;m a full‑stack developer focused on crafting fast,
								accessible, and reliable web experiences. I enjoy turning ideas into
								simple, usable products with thoughtful design and clean code.
							</p>
							<p>
								My current toolkit includes Next.js, React, TypeScript, Tailwind
								CSS, and Node.js. I care about performance, DX, and maintainable
								architectures—shipping features that scale without compromising on
								clarity.
							</p>
							<p>
								When I&apos;m not building, I explore new frameworks, refine UI
								patterns, and work on small experiments that help me learn faster.
							</p>
							<p>Open to interesting collaborations and opportunities.</p>
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default About;
