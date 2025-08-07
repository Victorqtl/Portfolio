import About from '@/components/about';
import Info from '@/components/info/info';

export default function page() {
	return (
		<main className='max-w-2xl mx-auto h-full w-full'>
			<div className='flex flex-col gap-16 px-6 lg:px-0 py-12 lg:py-16'>
				<About />
				<Info />
			</div>
		</main>
	);
}
