'use client';

import { Button } from './ui/button';
import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import LinkedInIcon from './ui/linkedin-icon';
import GitHubIcon from './ui/github-icon';

import Link from 'next/link';

const socials = [
	{
		icon: (
			<LinkedInIcon className='w-[1.4rem] h-[1.4rem] text-muted-foreground hover:text-primary transition-colors duration-300' />
		),
		link: 'https://www.linkedin.com/in/victor-quertelet-9143a3302/',
	},
	{
		icon: (
			<GitHubIcon className='w-[1.5rem] h-[1.5rem] text-muted-foreground hover:text-primary transition-colors duration-300' />
		),
		link: 'https://github.com/Victorqtl',
	},
];

export default function About() {
	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: 'appel-decouverte' });
			cal('ui', {
				hideEventTypeDetails: false,
				layout: 'month_view',
				theme: 'dark',
				styles: {
					branding: {
						brandColor: '#1a1a1a',
					},
				},
			});
		})();
	}, []);
	return (
		<section className='flex flex-col'>
			<div className='flex flex-col gap-6'>
				<div className='flex items-center gap-4'>
					<div className='flex flex-col gap-1'>
						<h1 className='text-4xl'>Victor Quertelet</h1>
						<p className='text-lg font-medium'>Développeur Full Stack</p>
					</div>
				</div>
				<div>
					<p className='text-muted-foreground'>
						Je conçois des applications web fiables et durables, pensées pour grandir avec vos projets.
						Chaque détail compte pour offrir une expérience fluide et unique.
					</p>
				</div>
				<div className='flex justify-between items-center'>
					<div className='flex items-center gap-5'>
						{socials.map(social => (
							<Link
								key={social.link}
								href={social.link}>
								{social.icon}
							</Link>
						))}
					</div>
					<Button
						data-cal-namespace='appel-decouverte'
						data-cal-link='victor-quertelet/appel-decouverte'
						data-cal-config='{"layout":"month_view"}'
						className='w-fit'>
						Réserver un appel
					</Button>
				</div>
			</div>
		</section>
	);
}
