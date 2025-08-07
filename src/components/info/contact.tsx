import Link from 'next/link';
import { Button } from '../ui/button';

export default function Contact() {
	return (
		<div className='flex flex-col gap-4'>
			<h2>Contactez-moi</h2>
			<div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
				<Link
					href='mailto:victor.quertelet@gmail.com'
					className='self-center w-fit underline underline-offset-[2.5px] decoration-[#505050] hover:decoration-primary transition-colors duration-300'>
					victor.quertelet@gmail.com
				</Link>
				<p className='self-center text-sm text-muted-foreground sm:hidden'>ou</p>
				<Button
					data-cal-namespace='appel-decouverte'
					data-cal-link='victor-quertelet/appel-decouverte'
					data-cal-config='{"layout":"month_view"}'
					className='w-full sm:w-fit'>
					Réserver un appel
				</Button>
			</div>
		</div>
	);
}
