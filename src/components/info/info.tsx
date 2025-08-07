import Experience from './experience';
import Projects from './projects';
import Stack from './stack';
import Blog from './blog';
import Contact from './contact';

export default function Info() {
	return (
		<div className='flex flex-col gap-10'>
			<Experience />
			<Projects />
			<Stack />
			<Blog />
			<Contact />
		</div>
	);
}
