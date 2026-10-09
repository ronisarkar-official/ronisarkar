'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from './ui/Button';
import { Moon } from './animate-ui/icons/moon';
import { Sun } from './animate-ui/icons/sun';
import { AnimateIcon } from './animate-ui/icons/icon';
import { useSound } from '@/hooks/use-sound';
import { switch002Sound } from '@/lib/switch-002';

export default function ThemeToggle() {
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const [playSwitch] = useSound(switch002Sound, {
		volume: 0.25,
		interrupt: true,
	});

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleThemeToggle = () => {
		const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
		// Modulate playback rate subtly: slightly deeper for dark, brighter for light
		playSwitch({ playbackRate: nextTheme === 'dark' ? 0.92 : 1.1 });
		setTheme(nextTheme);
	};

	return (
		<Button
			size="icon"
			variant="ghost"
			onClick={handleThemeToggle}>
			{!mounted ? (
				<Sun className="opacity-50" />
			) : resolvedTheme === 'dark' ? (
				<AnimateIcon animateOnHover>
					<Sun />
				</AnimateIcon>
			) : (
				<AnimateIcon animateOnHover>
					<Moon />
				</AnimateIcon>
			)}
			<span className="sr-only">Theme Toggle</span>
		</Button>
	);
}
