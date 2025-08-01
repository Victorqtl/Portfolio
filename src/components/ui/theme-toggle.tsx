'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './button';

export function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	const isDark = resolvedTheme === 'dark';

	return (
		<div className='flex gap-2'>
			<Button
				onClick={() => setTheme(isDark ? 'light' : 'dark')}
				variant='outline'
				size='icon'
				aria-label={isDark ? 'Light mode' : 'Dark mode'}>
				<Sun className='h-[1.2rem] w-[1.2rem] scale-0 transition-all dark:scale-100' />
				<Moon className='absolute h-[1.2rem] w-[1.2rem] scale-100 transition-all dark:scale-0' />
			</Button>
		</div>
	);
}
