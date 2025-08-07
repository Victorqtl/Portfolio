import Link from 'next/link';
import { ArrowUpLeft } from 'lucide-react';
import Suspense from './components/code-block/suspense';

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
					<h1 className='text-[1.5rem] lg:text-[1.75rem]'>
						Utiliser React &lt;Suspense&gt; pour améliorer le chargement dans votre application
					</h1>
					<p className='text-muted-foreground'>5 août 2025</p>
				</div>
				<article className='flex flex-col gap-10'>
					<p>
						Le composant React &lt;Suspense&gt; permet de mieux gérer le chargement des composants
						asynchrones en affichant un contenu temporaire pendant leur préparation. Cette approche
						fluidifie l’expérience utilisateur en évitant les écrans vides ou les blocages.
					</p>
					<div className='flex flex-col gap-4'>
						<h2 className='text-lg'>Qu’est-ce que &lt;Suspense&gt; ?</h2>
						<p>
							&lt;Suspense&gt; enveloppe un composant asynchrone et affiche un fallback (indicateur de
							chargement) tant que ce composant n’est pas prêt. Cela évite de bloquer l’interface et garde
							l’utilisateur informé que du contenu arrive.
						</p>
					</div>
					<div className='flex flex-col gap-4'>
						<h2 className='text-lg'>Exemple d&apos;utilisation</h2>
						<Suspense />
						<p>
							Le fallback &lt;div&gt;Chargement...&lt;/div&gt; s’affiche immédiatement pendant que
							MonComposantAsynchrone se charge. L’utilisateur voit un retour visuel instantané, ce qui
							réduit la sensation d’attente.
						</p>
					</div>
					<div className='flex flex-col gap-4'>
						<h2 className='text-lg'>L’impact sur l’expérience utilisateur</h2>
						<p>
							Grâce à &lt;Suspense&gt; , l’application reste réactive et évite les blancs ou blocages lors
							du chargement des parties asynchrones. L’affichage progressif du contenu donne une
							impression de rapidité et de fluidité, essentielle pour maintenir l’attention.
						</p>
					</div>
					<div className='flex flex-col gap-4'>
						<h2 className='text-lg'>Bonnes pratiques</h2>
						<ul className='list-disc pl-6 space-y-2'>
							<li>Privilégier un fallback simple et discret qui informe sans distraire.</li>
							<li>
								Utiliser &lt;Suspense&gt; uniquement autour des composants qui chargent des données ou
								sont lourds à afficher.
							</li>
							<li>Coupler avec une gestion d’erreurs spécifique pour éviter les blocages définitifs.</li>
						</ul>
					</div>
				</article>
			</div>
		</main>
	);
}
