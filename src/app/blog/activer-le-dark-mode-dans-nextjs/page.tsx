import Link from 'next/link';
import { ArrowUpLeft } from 'lucide-react';
import InstallDependencies from './components/code-blocks/install-dependencies';
import ThemeProvider from './components/code-blocks/theme-provider';
import ThemeProviderLayout from './components/code-blocks/theme-provider-layout';
import ToggleTheme from './components/code-blocks/toggle-theme';

export default function page() {
	return (
		<main className='max-w-[1072px] mx-auto grid grid-rows-[auto_1fr] gap-6 px-6 py-12 lg:grid-cols-10 lg:gap-4 lg:p-0 lg:py-16'>
			<nav className='lg:col-span-2'>
				<Link
					href='/blog'
					className='flex items-center gap-2 pt-2'>
					<ArrowUpLeft size={14} />
					Blog
				</Link>
			</nav>
			<div className='lg:col-span-6 flex flex-col gap-4 lg:gap-10 overflow-hidden'>
				<div className='flex flex-col gap-1'>
					<h1 className='text-[1.5rem] lg:text-[1.75rem]'>Activer le dark mode dans Next.js</h1>
					<p className='text-muted-foreground'>1 août 2025</p>
				</div>
				<article className='flex flex-col gap-10'>
					<p>
						Le dark mode est devenu un standard pour améliorer l’expérience utilisateur. Voici comment
						l’implémenter simplement dans une application Next.js avec next-themes et le design system
						shadcn/ui.
					</p>
					<div className='flex flex-col gap-4'>
						<h2 className='text-lg'>1. installer les dépendances</h2>
						<InstallDependencies />
					</div>
					<div className='flex flex-col gap-4'>
						<h2 className='text-lg'>2. Créer un ThemeProvider</h2>
						<p>Ce composant va envelopper votre application pour gérer le thème global.</p>
						<ThemeProvider />
					</div>
					<div className='flex flex-col gap-4'>
						<h2 className='text-lg'>3. Ajouter le ThemeProvider dans le layout</h2>
						<p>Dans app/layout.tsx, entourez votre application avec le provider.</p>
						<ThemeProviderLayout />
					</div>
					<div className='flex flex-col gap-4'>
						<h2 className='text-lg'>4. Créer un composant toggle de thème</h2>
						<p>
							Utilisez le composant dropdown-menu de shadcn/ui pour proposer le choix entre clair, sombre
							et système.
						</p>
						<ToggleTheme />
					</div>
					<div className='flex flex-col gap-4'>
						<h2 className='text-lg'>5. Intégrer le composant toggle dans votre interface</h2>
						<p>
							Placez ce composant dans votre header ou navbar pour permettre à l’utilisateur de changer
							facilement de thème.
						</p>
					</div>
				</article>
			</div>
		</main>
	);
}
