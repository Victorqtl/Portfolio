import Link from 'next/link';
import { Undo2 } from 'lucide-react';

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

export default function page() {
	return (
		<main className='max-w-[1072px] mx-auto grid grid-rows-[auto_1fr] gap-6 px-6 py-12 lg:grid-cols-10 lg:gap-4 lg:p-0 lg:pt-16'>
			<nav className='lg:col-span-2'>
				<Link
					href='/'
					className='flex items-center gap-2 pt-2'>
					<Undo2 size={14} />
					Accueil
				</Link>
			</nav>
			<div className='lg:col-span-6 flex flex-col gap-4 lg:gap-10'>
				<h1 className='text-[1.5rem] lg:text-[1.75rem]'>Blog</h1>
				<div className='flex border-t border-t-[#2e2e2e] border-b border-b-[#2e2e2e]'>
					<p className='pt-4 text-sm text-muted-foreground'>2025</p>
					<ul className='flex flex-col group ml-[25%]'>
						{blogData.map((article, index) => (
							<li
								key={index}
								className='border-b border-b-[#2e2e2e] last:border-b-0'>
								<Link
									href={article.href}
									className={`flex gap-4 lg-justify-between py-4 group-hover:opacity-50 hover:opacity-100 transition-opacity duration-200`}>
									<h2 className='text-base font-poppins flex-3/4'>{article.title}</h2>
									<p className='text-sm text-muted-foreground'>{article.date}</p>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</main>
	);
}
