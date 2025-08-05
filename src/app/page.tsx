import About from '@/components/about';
import Info from '@/components/info/info';

export default function page() {
	return (
		<div className='flex flex-col lg:flex-row min-h-screen'>
			<About />
			<div className='flex-1 overflow-y-auto'>
				<Info />
			</div>
		</div>
	);
}
