import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ProjectItem {
	href: string;
	title: string;
	description: string;
}

const projectsData: ProjectItem[] = [
	{
		href: 'https://www.vermeil.life/',
		title: 'Vermeil',
		description: "Un blog dédié à l'élégance masculine, à travers des articles de différentes catégories.",
	},
	{
		href: 'https://fresh-spot.vercel.app/',
		title: 'Freshspot',
		description: 'Une application web qui recense les lieux où se rafraîchir à Paris.',
	},
	{
		href: 'https://swimfly.vercel.app/',
		title: 'Swimfly',
		description: "Une application Kanban pour organiser, visualiser et suivre l'avancement des tâches.",
	},
	{
		href: 'https://nintendo-pokemon-pearl-clone.vercel.app/',
		title: 'Pokémon perle',
		description: "Une page produit recréée pour Pokémon Perle, axée sur le design et les animations d'interface.",
	},
];

export default function Projects() {
	return (
		<div className='flex flex-col gap-4'>
			<h2>Projets</h2>
			<ul className='flex flex-col gap-4'>
				{projectsData.map((project, index) => (
					<li
						key={index}
						className='flex flex-col gap-1'>
						<Link
							href={project.href}
							className='w-fit flex gap-1 underline underline-offset-[2.5px] decoration-[#505050] hover:decoration-primary transition-colors duration-300'>
							<span>{project.title}</span>
							<ArrowUpRight
								size={20}
								className='text-[#707070] stroke-[1.5px]'
							/>
						</Link>
						<p className='text-muted-foreground'>{project.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
