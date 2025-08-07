import Link from 'next/link';

interface BlogItem {
	href: string;
	title: string;
	category: string;
}

const projectsData: BlogItem[] = [
	{
		href: '/blog/',
		title: "Zustand, le gestionnaire d'état parfait ?",
		category: 'Outils',
	},
	{
		href: '/blog/',
		title: 'Next.js, Comment intégrer efficacement une API',
		category: 'Framework',
	},
	{
		href: '/blog/',
		title: 'Les designs les plus inspirants sur Figma',
		category: 'Design',
	},
];

export default function Blog() {
	return (
		<div className='flex flex-col gap-4'>
			<h2>Blog</h2>
			<ul className='flex flex-col'>
				{projectsData.map((project, index) => (
					<li
						key={index}
						className='flex items-center justify-between'>
						<Link
							href={project.href}
							className='w-full flex items-center justify-between py-2 hover:bg-muted-foreground/5 transition-colors duration-300 group'>
							<p className='group-hover:text-primary'>{project.title}</p>
							<p className='text-foreground/60 group-hover:text-muted-foreground'>{project.category}</p>
						</Link>
					</li>
				))}
			</ul>
			<Link
				href='/blog'
				className='w-fit underline underline-offset-[2.5px] decoration-[#505050] hover:decoration-primary transition-colors duration-300 text-muted-foreground hover:text-primary text-sm'>
				Voir tout
			</Link>
		</div>
	);
}
