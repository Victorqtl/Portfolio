import Me from '@/assets/me.png';
import Image from 'next/image';
import { Button } from './ui/button';
import { ThemeToggle } from './ui/theme-toggle';
import { Mail, Linkedin, Github, Ghost } from 'lucide-react';

import Link from 'next/link';

const socials = [
	{
		icon: <Mail className='w-[1.2rem] h-[1.2rem] stroke-primary' />,
		link: 'mailto:victor.quertelet@gmail.com',
	},
	{
		icon: <Linkedin className='w-[1.2rem] h-[1.2rem] stroke-primary' />,
		link: 'https://www.linkedin.com/in/victor-quertelet-9143a3302/',
	},
	{
		icon: <Github className='w-[1.2rem] h-[1.2rem] stroke-primary' />,
		link: 'https://github.com/Victorqtl',
	},
];

export default function About() {
	return (
		<section className='shrink-0 p-4 lg:p-16 max-w-xl flex flex-col lg:justify-between lg:h-screen lg:sticky lg:top-0'>
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
				<Button size='lg'>Réserver un appel</Button>
			</div>
			<div className='hidden lg:flex items-center justify-between'>
				<div className='flex gap-4'>
					{socials.map(social => (
						<Button
							key={social.link}
							variant='outline'
							size='icon'
							asChild>
							<Link href={social.link}>{social.icon}</Link>
						</Button>
					))}
				</div>
				<ThemeToggle />
			</div>
		</section>
	);
}
