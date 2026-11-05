'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextFlipProps {
	words: string[];
	className?: string;
	interval?: number;
}

export default function TextFlip({
	words,
	className,
	interval = 2800,
}: TextFlipProps) {
	const [index, setIndex] = useState(0);
	const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		if (!words || words.length <= 1) return;

		const timer = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, interval);

		return () => clearInterval(timer);
	}, [words, interval]);

	if (!words || words.length === 0) return null;

	if (words.length === 1) {
		return (
			<span className={cn('text-foreground font-medium', className)}>
				{words[0]}
			</span>
		);
	}

	return (
		<span
			className={cn(
				'relative inline-flex items-center overflow-hidden py-0.5 align-middle',
				className
			)}
		>
			<AnimatePresence mode="popLayout" initial={false}>
				<motion.span
					key={`${index}-${words[index]}`}
					initial={
						shouldReduceMotion
							? { opacity: 0 }
							: { opacity: 0, y: 14, filter: 'blur(4px)' }
					}
					animate={
						shouldReduceMotion
							? { opacity: 1 }
							: { opacity: 1, y: 0, filter: 'blur(0px)' }
					}
					exit={
						shouldReduceMotion
							? { opacity: 0 }
							: { opacity: 0, y: -14, filter: 'blur(4px)' }
					}
					transition={
						shouldReduceMotion
							? { duration: 0.25, ease: 'easeInOut' }
							: {
									y: {
										type: 'spring',
										stiffness: 280,
										damping: 25,
										mass: 0.8,
									},
									opacity: { duration: 0.22, ease: 'easeInOut' },
									filter: { duration: 0.22, ease: 'easeInOut' },
								}
					}
					style={{ willChange: 'transform, opacity, filter' }}
					className="inline-block whitespace-nowrap text-foreground font-medium"
				>
					{words[index]}
				</motion.span>
			</AnimatePresence>
		</span>
	);
}
