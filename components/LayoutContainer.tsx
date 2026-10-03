'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import BackToTop from '@/components/BackToTop';

interface LayoutContainerProps {
	children: React.ReactNode;
	header: React.ReactNode;
	footer: React.ReactNode;
}

export default function LayoutContainer({
	children,
	header,
	footer,
}: LayoutContainerProps) {
	const pathname = usePathname();
	const isAdmin = pathname?.startsWith('/admin');

	if (isAdmin) {
		return (
			<div className="flex h-screen max-h-screen w-full flex-col overflow-hidden">
				<div className="shrink-0 z-50">
					{header}
				</div>
				<main className="flex-1 min-h-0 w-full overflow-hidden flex flex-col px-1 sm:px-3">
					{children}
				</main>
				<div className="shrink-0 z-10 border-t border-border/40 bg-background">
					{footer}
				</div>
			</div>
		);
	}

	return (
		<>
			{header}
			<BackToTop />
			<div className="mx-auto flex max-w-4xl flex-col px-8">
				<main className="grow">{children}</main>
			</div>
			{footer}
		</>
	);
}
