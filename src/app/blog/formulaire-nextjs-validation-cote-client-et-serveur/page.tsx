import Link from 'next/link';
import { ArrowUpLeft } from 'lucide-react';
import ZodSchema from './components/code-blocks/zod-schema';
import ServerAction from './components/code-blocks/server-action';
import Form from './components/code-blocks/form';
import PrismaModel from './components/code-blocks/prisma-model';

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
						Formulaire Next.js : validation côté client et serveur
					</h1>
					<p className='text-muted-foreground'>7 août 2025</p>
				</div>
				<article className='flex flex-col gap-10'>
					<p>
						Créer un formulaire fiable, validé côté client comme côté serveur, avec enregistrement dans la
						base de données : c’est un cas d’usage courant. Avec React Hook Form, Zod, Prisma, et les Server
						Actions de Next.js, on obtient une solution moderne, claire et robuste.
					</p>
					<div className='flex flex-col gap-4'>
						<h2 className='text-lg'> Stack utilisée</h2>
						<ul className='list-disc pl-6 space-y-2'>
							<li>React Hook Form : gestion du formulaire côté client</li>
							<li>Zod : validation côté client & serveur</li>
							<li>Server Actions (Next.js) : traitement et sécurité côté serveur</li>
							<li>Prisma : interaction avec la base de données</li>
						</ul>
					</div>
					<div className='flex flex-col gap-4'>
						<h2 className='text-lg'>1. Créer le modèle Prisma</h2>
						<p>Voici un modèle simple qui correspond aux champs du formulaire.</p>
						<PrismaModel />
					</div>
					<div className='flex flex-col gap-4'>
						<h2 className='text-lg'>2. Créer le schéma de validation avec Zod</h2>
						<p>
							Ce schéma centralise les règles de validation : il est utilisé côté client et côté serveur
							pour garantir la cohérence.
						</p>
						<ZodSchema />
					</div>
					<div className='flex flex-col gap-4'>
						<h2 className='text-lg'>3. Créer l’action serveur avec validation</h2>
						<p>
							Cette action est appelée depuis le formulaire. Elle vérifie les données côté serveur avec
							Zod, puis les enregistre avec Prisma.
						</p>
						<ServerAction />
						<div className='flex flex-col gap-2'>
							<p className='font-medium'>Pourquoi utiliser FormData ?</p>
							<p>
								Les Server Actions attendent un objet FormData lorsqu’on utilise un formulaire HTML
								natif ou qu’on veut simplifier l’appel depuis le client.
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<h2 className='text-lg'>4. Créer le formulaire avec React Hook Form</h2>
						<p>
							On relie chaque champ au schéma Zod via le resolver, et on affiche les erreurs côté client
							ou venant du serveur.
						</p>
						<Form />
					</div>

					<div className='flex flex-col gap-4'>
						<h2 className='text-lg'>Résultat</h2>
						<ul className='list-disc pl-6 space-y-2'>
							<li>Validation cohérente et réutilisable (client + serveur)</li>
							<li>Sécurité garantie grâce aux Server Actions</li>
							<li>Données enregistrées proprement avec Prisma</li>
						</ul>
					</div>
				</article>
			</div>
		</main>
	);
}
