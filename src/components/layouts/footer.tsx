import { ThemeToggle } from '../ui/theme-toggle';

export default function Footer() {
	return (
		<div className='flex justify-between items-center p-4 h-16'>
			<ThemeToggle />
		</div>
	);
}
