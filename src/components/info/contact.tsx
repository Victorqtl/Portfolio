import Link from 'next/link';

export default function Contact() {
	return (
		<div className='flex flex-col gap-4'>
			<h2>Contactez-moi</h2>
			<Link
				href='mailto:victor.quertelet@gmail.com'
				className='w-fit underline underline-offset-[2.5px] decoration-[#505050] hover:decoration-primary transition-colors duration-300'>
				victor.quertelet@gmail.com
			</Link>
		</div>
	);
}
