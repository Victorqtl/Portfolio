import Image from 'next/image';
import Me from '@/assets/me.png';
import { Button } from './ui/button';
import Link from 'next/link';
import { House, PencilLine, UserSearch, Send, Linkedin, Github } from 'lucide-react';

export default function Sidebar() {
	return (
		<div className='flex flex-col gap-4 w-[300px] border-r border-sidebar-border h-screen px-4 py-6 bg-sidebar'>
			<div className='flex items-center gap-2'>
				<Image
					src={Me}
					alt='logo'
					className='w-10 h-10 rounded-full'
					width={1000}
					height={1000}
				/>
				<div>
					<p>Victor Quertelet</p>
					<p className='text-muted-foreground'>Développeur Full Stack</p>
				</div>
			</div>
			<div className='flex flex-col gap-2'>
				<Button
					variant='ghost'
					asChild>
					<Link
						href='/'
						className='justify-start gap-2'>
						<House className='w-4 h-4' />
						Accueil
					</Link>
				</Button>
				<Button
					variant='ghost'
					asChild>
					<Link
						href='/blog'
						className='justify-start gap-2'>
						<PencilLine className='w-4 h-4' />
						Blog
					</Link>
				</Button>
				<Button
					variant='ghost'
					asChild>
					<Link
						href='/stack'
						className='justify-start gap-2'>
						<UserSearch className='w-4 h-4' />À propos
					</Link>
				</Button>
				<Button
					variant='ghost'
					asChild>
					<Link
						href='/contact'
						className='justify-start gap-2'>
						<Send className='w-4 h-4' />
						Contactez-moi
					</Link>
				</Button>
			</div>
			<div className='flex flex-col gap-4'>
				<p className='px-3 text-muted-foreground'>Réseaux</p>
				<div className='flex flex-col gap-2'>
					<Button
						variant='ghost'
						asChild>
						<Link
							href='/stack'
							className='justify-start gap-2'>
							<Linkedin
								fill='currentColor'
								strokeWidth={0.5}
								className='w-4 h-4'
							/>
							Linkedin
						</Link>
					</Button>
					<Button
						variant='ghost'
						asChild>
						<Link
							href='/contact'
							className='justify-start gap-2'>
							<Github className='w-4 h-4' />
							Github
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
