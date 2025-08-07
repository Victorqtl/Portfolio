interface ExperienceItem {
	period: string;
	title: string;
	description: string;
}

const experienceData: ExperienceItem[] = [
	{
		period: "04/2025 - Aujourd'hui",
		title: 'Développeur full stack freelance',
		description: "Développement d'applications web sur mesure, de la conception au déploiement.",
	},
];

export default function Experience() {
	return (
		<div className='flex flex-col gap-4'>
			<h2>Expérience</h2>
			{experienceData.map((item, index) => (
				<div
					key={index}
					className='flex gap-6 xl:gap-0'>
					<p className='flex-2/5 text-muted-foreground text-sm'>{item.period}</p>
					<div className='flex flex-col gap-1'>
						<p>{item.title}</p>
						<p className='text-muted-foreground'>{item.description}</p>
					</div>
				</div>
			))}
		</div>
	);
}
