import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Formulaire Next.js : validation côté client et serveur',
	description:
		'Créez des formulaires robustes avec validation côté client et serveur en utilisant React Hook Form, Zod, Prisma et les Server Actions de Next.js.',
	openGraph: {
		title: 'Formulaire Next.js : validation côté client et serveur',
		description:
			'Créez des formulaires robustes avec validation côté client et serveur en utilisant React Hook Form, Zod, Prisma et les Server Actions de Next.js.',
		type: 'article',
		url: 'https://victorquertelet.com/blog/formulaire-nextjs-validation-cote-client-et-serveur',
		siteName: 'Victor Quertelet',
	},
	twitter: {
		card: 'summary',
		title: 'Formulaire Next.js : validation côté client et serveur',
		description:
			'Créez des formulaires robustes avec validation côté client et serveur en utilisant React Hook Form, Zod, Prisma et les Server Actions de Next.js.',
	},
	alternates: {
		canonical: 'https://victorquertelet.com/blog/formulaire-nextjs-validation-cote-client-et-serveur',
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return children;
}
