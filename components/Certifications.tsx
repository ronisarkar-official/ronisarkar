'use client';

import { useState } from 'react';
import PortableTextContent from '@/components/PortableTextContent';
import dayjs from 'dayjs';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { Crown, Paperclip, ChevronDown, ArrowRight, X } from 'lucide-react';
import { Separator } from '@/components/ui/Separator';
import {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from '@/components/ui/tooltip';
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '@/components/ui/Accordion';
import Icon from '@/components/Icon';
import LinkWithIcon from '@/components/LinkWithIcon';
import type { Award } from '@/lib/sanity';

interface Props {
	awards: Award[];
	showHeader?: boolean;
	limit?: number;
	onlyPinned?: boolean;
}

function AwardIcon({ iconName }: { iconName?: string }) {
	if (!iconName || iconName === 'crown') {
		return <Crown className="size-3.5 text-muted-foreground" />;
	}
	return (
		<Icon
			name={iconName as any}
			className="size-3.5 text-muted-foreground"
		/>
	);
}

function AwardRightIcons({ award }: { award: Award }) {
	const [open, setOpen] = useState(false);

	if (!award.imageUrl) {
		return null;
	}

	return (
		<>
			<div className="flex items-center gap-1 shrink-0">
				<Tooltip>
					<TooltipTrigger asChild>
						<span
							role="button"
							tabIndex={0}
							className="relative flex size-7 items-center justify-center rounded-md hover:text-muted-foreground hover:bg-accent/50 transition-colors duration-150 after:absolute after:top-1/2 after:left-1/2 after:size-11 after:-translate-1/2 cursor-pointer"
							aria-label="View certificate"
							onClick={(e) => {
								e.stopPropagation();
								setOpen(true);
							}}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.stopPropagation();
									e.preventDefault();
									setOpen(true);
								}
							}}>
							<Paperclip className="size-3.5" />
						</span>
					</TooltipTrigger>
					<TooltipContent>
						<p>View certificate</p>
					</TooltipContent>
				</Tooltip>
			</div>

			<Dialog.Root
				open={open}
				onOpenChange={setOpen}>
				<Dialog.Portal>
					<Dialog.Overlay
						className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
						onClick={(e) => e.stopPropagation()}
					/>
					<Dialog.Content
						className="fixed left-[50%] top-[50%] z-50 max-h-[90vh] w-[95vw] max-w-3xl translate-x-[-50%] translate-y-[-50%] rounded-xl border bg-background p-4 sm:p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 overflow-hidden flex flex-col focus:outline-none"
						onClick={(e) => e.stopPropagation()}>
						<div className="flex items-center justify-between pb-3">
							<div>
								<Dialog.Title className="text-base sm:text-lg font-bold">
									{award.title}
								</Dialog.Title>
								<Dialog.Description className="text-xs text-muted-foreground">
									{award.prize} {award.grade ? `• ${award.grade}` : ''}
								</Dialog.Description>
							</div>
							<Dialog.Close asChild>
								<button
									type="button"
									className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
									aria-label="Close">
									<X className="size-5" />
								</button>
							</Dialog.Close>
						</div>

						<div className="relative w-full aspect-[1.42/1] rounded-lg overflow-hidden border bg-neutral-100 dark:bg-neutral-900/50">
							<Image
								src={award.modalUrl || award.imageUrl}
								alt={award.image?.alt || `${award.title} certificate`}
								fill
								unoptimized
								className="object-cover"
								placeholder={award.blurDataUrl ? 'blur' : 'empty'}
								blurDataURL={award.blurDataUrl}
							/>
						</div>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</>
	);
}

function AwardMeta({ award }: { award: Award }) {
	return (
		<div className="flex-1 text-left">
			<h3 className="text-sm font-semibold leading-snug">{award.title}</h3>
			<dl className="mt-1 flex flex-wrap items-center gap-x-3 text-xs text-muted-foreground">
				<dt className="sr-only">Prize</dt>
				<dd>{award.prize}</dd>
				<Separator
					orientation="vertical"
					className="h-3! w-px!"
					aria-hidden="true"
				/>
				<dt className="sr-only">Date</dt>
				<dd>
					<time dateTime={new Date(award.date).toISOString()}>
						{dayjs(award.date).format('MM.YYYY')}
					</time>
				</dd>
				<Separator
					orientation="vertical"
					className="h-3! w-px!"
					aria-hidden="true"
				/>
				<dt className="sr-only">Grade</dt>
				<dd>{award.grade}</dd>
			</dl>
		</div>
	);
}

function AwardItemExpandable({ award }: { award: Award }) {
	return (
		<Accordion
			type="single"
			collapsible>
			<AccordionItem
				value={award._id}
				className="border-0">
				<div className="flex items-center">
					{/* Dynamic icon */}
					<div className="mx-4 flex size-7 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted/50">
						<AwardIcon iconName={award.icon} />
					</div>

					{/* Content with dashed left border */}
					<div className="flex-1 border-l border-dashed border-muted-foreground/20">
						<AccordionTrigger className="w-full px-4 py-4 hover:no-underline hover:bg-accent/30 transition-colors [&>svg]:hidden group/trigger">
							<div className="flex flex-1 items-center gap-2">
								<AwardMeta award={award} />
								<AwardRightIcons award={award} />
								<div className="flex size-6 items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] group-data-[state=open]/trigger:rotate-180">
									<ChevronDown className="size-4" />
								</div>
							</div>
						</AccordionTrigger>
					</div>
				</div>

				<AccordionContent>
					<div className="ml-15 border-l border-dashed border-muted-foreground/20 px-4 pb-2">
						<div className="border-t border-muted-foreground/10 pt-3">
							<PortableTextContent
								content={award.description}
								className="!prose-sm text-muted-foreground [&_p]:leading-relaxed [&_p:last-child]:mb-0 [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:text-primary/80"
							/>
						</div>
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}

function AwardItemStatic({ award }: { award: Award }) {
	return (
		<div className="flex items-center">
			{/* Dynamic icon */}
			<div className="mx-4 flex size-7 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted/50">
				<AwardIcon iconName={award.icon} />
			</div>

			{/* Content with dashed left border */}
			<div className="flex-1 border-l border-dashed border-muted-foreground/20">
				<div className="flex items-center gap-2 px-4 py-4">
					<AwardMeta award={award} />
					<AwardRightIcons award={award} />
				</div>
			</div>
		</div>
	);
}

export default function Achievements({
	awards,
	showHeader = true,
	limit,
	onlyPinned = true,
}: Props) {
	// On home route, only show certificates pinned by the user, sorted by display order
	const filteredAwards = onlyPinned
		? awards
				.filter((award) => Boolean(award.pinned))
				.sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
		: awards;

	if (!filteredAwards || filteredAwards.length === 0) {
		if (!showHeader) {
			return (
				<section className="text-center py-8">
					<p className="text-muted-foreground">No certifications or achievements available at the moment.</p>
				</section>
			);
		}
		return null;
	}

	const displayAwards = limit ? filteredAwards.slice(0, limit) : filteredAwards;

	return (
		<section
			className="flex w-full flex-col gap-6"
			id="achievements">
			{showHeader && (
				<header className="flex items-end justify-between">
					<div>
						<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
							Achievements
						</h2>
						<p className="text-muted-foreground text-sm sm:text-base">
							Awards, hackathon wins & certifications
						</p>
					</div>
					<LinkWithIcon
						href="/achievements"
						position="right"
						icon={<ArrowRight className="size-5" />}
						text="view more"
						className="hover:underline underline-offset-4"
					/>
				</header>
			)}

			<div className="divide-y divide-border rounded-xl border bg-card overflow-hidden">
				{displayAwards.map((award) =>
					award.description && award.description.length > 0 ?
						<AwardItemExpandable
							key={award._id}
							award={award}
						/>
					:	<AwardItemStatic
							key={award._id}
							award={award}
						/>,
				)}
			</div>
		</section>
	);
}
