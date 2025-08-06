interface StackItem {
	href: string;
	title: string;
	description: string;
}

const stackData: StackItem[] = [
	{
		href: '/',
		title: 'React',
		description: 'Ma base pour créer des interfaces dynamiques et modulaires.',
	},
	{
		href: '/',
		title: 'Next.js',
		description: 'Mon framework de prédilection pour créer des applications complètes.',
	},
	{
		href: '/',
		title: 'TypeScript',
		description: 'Pour écrire un code plus clair, plus sûr.',
	},
	{
		href: '/',
		title: 'Tailwind CSS',
		description: 'Rapide et pratique pour créer des interfaces propres.',
	},
	{
		href: '/',
		title: 'Prisma',
		description: 'ORM simple, rapide et facile à utiliser',
	},
	{
		href: '/',
		title: 'PostgreSQL',
		description: 'Tout simplement la meilleure base de données.',
	},
	{
		href: '/',
		title: 'Vercel',
		description: 'La solution évidente pour déployer mes projets',
	},
	{
		href: '/',
		title: 'Supabase',
		description: 'Simplifie la gestion de mes bases de données.',
	},
];

export default function Stack() {
	return (
		<div className='flex flex-col gap-4'>
			<h2>Stack</h2>
			<ul className='flex flex-col gap-4'>
				{stackData.map((item, index) => (
					<li
						key={index}
						className='flex flex-col gap-1'>
						<div className='flex items-center gap-2'>
							<p className=' text-[#707070]'>•</p>
							<p className='font-medium'>{item.title}</p>
						</div>
						<p className='text-muted-foreground'>{item.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
