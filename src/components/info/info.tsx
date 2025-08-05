import Experience from './experience';
import Projects from './projects';
import Stack from './stack';
import Blog from './blog';

export default function Info() {
	return (
		<div className='p-4 lg:p-16 flex flex-col gap-10'>
			<Experience />
			<Projects />
			<Stack />
			<Blog />
		</div>
	);
}
