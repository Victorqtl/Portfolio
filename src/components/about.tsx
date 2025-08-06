'use client';

import Me from '@/assets/me.png';
import Image from 'next/image';
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
		<section className='shrink-0 px-6 py-12 lg:p-16 max-w-xl flex flex-col lg:justify-between lg:h-screen lg:sticky lg:top-0'>
			<div className='flex flex-col gap-6'>
				<div className='flex items-center gap-4'>
					<Image
						src={Me}
						alt='Victor Quertelet'
						className='w-20 h-20 rounded-full'
						width={500}
						height={500}
					/>
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
				<div className='flex justify-end items-center gap-5 lg:hidden'>
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
					size='lg'>
					Réserver un appel
				</Button>
			</div>
			<div className='hidden lg:flex items-center gap-5'>
				{socials.map(social => (
					<Link
						key={social.link}
						href={social.link}>
						{social.icon}
					</Link>
				))}
			</div>
		</section>
	);
}
