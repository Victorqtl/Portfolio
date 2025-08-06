import Link from 'next/link';
import { Undo2 } from 'lucide-react';

interface BlogItem {
	href: string;
	title: string;
	category: string;
}

const blogData: BlogItem[] = [
	{
		href: '',
		title: '',
		category: '',
	},
	{
		href: '',
		title: '',
		category: '',
	},
	{
		href: '',
		title: '',
		category: '',
	},
	{
		href: '',
		title: '',
		category: '',
	},
	{
		href: '',
		title: '',
		category: '',
	},
];

export default function page() {
	return (
		<main className='max-w-5xl mx-auto grid grid-rows-[auto_1fr] gap-6 px-6 py-12 lg:grid-cols-10 lg:gap-4 lg:p-0 lg:pt-16'>
			<nav className='lg:col-span-2'>
				<Link
					href='/'
					className='flex items-center gap-2 pt-2'>
					<Undo2 size={14} />
					Accueil
				</Link>
			</nav>
			<div className='lg:col-span-6 flex flex-col gap-4 lg:gap-10'>
				<h1 className='text-[1.5rem] lg:text-[1.75rem]'>Articles</h1>
				<ul className='flex flex-col group'>
					{blogData.map((article, index) => (
						<li key={index}>
							<Link
								href={article.href}
								className={`flex gap-4 lg-justify-between py-4 group-hover:opacity-50 hover:opacity-100 transition-opacity duration-200`}>
								<h2 className='text-base font-poppins flex-3/4'>{article.title}</h2>
								<p className='text-muted-foreground'>{article.category}</p>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}
