import Link from 'next/link';

interface BlogItem {
	href: string;
	title: string;
	date: string;
}

const blogData: BlogItem[] = [
	{
		href: '/blog/formulaire-nextjs-validation-cote-client-et-serveur',
		title: 'Formulaire Next.js : validation côté client et serveur',
		date: '07/08',
	},
	{
		href: '/blog/utiliser-react-suspense-pour-ameliorer-le-chargement',
		title: 'Utiliser React <Suspense> pour améliorer le chargement',
		date: '05/08',
	},
	{
		href: '/blog/activer-le-dark-mode-dans-nextjs',
		title: 'Activer le dark mode dans Next.js',
		date: '01/08',
	},
];

export default function Blog() {
	return (
		<div className='flex flex-col gap-4'>
			<h2>Blog</h2>
			<ul className='flex flex-col group'>
				{blogData.map((project, index) => (
					<li
						key={index}
						className='flex items-center justify-between'>
						<Link
							href={project.href}
							className='w-full flex gap-6 lg:items-center justify-between py-2 transition-opacity duration-300 group-hover:opacity-50 hover:opacity-100'>
							<p className='group-hover:text-primary'>{project.title}</p>
							<p className='text-muted-foreground text-sm'>{project.date}</p>
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
