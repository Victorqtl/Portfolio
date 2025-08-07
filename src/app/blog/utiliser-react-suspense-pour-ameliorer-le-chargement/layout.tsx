import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Utiliser React Suspense pour améliorer le chargement',
	description:
		"Découvrez comment utiliser React Suspense pour améliorer l'expérience utilisateur lors du chargement de composants asynchrones.",
	openGraph: {
		title: 'Utiliser React Suspense pour améliorer le chargement',
		description:
			"Découvrez comment utiliser React Suspense pour améliorer l'expérience utilisateur lors du chargement de composants asynchrones.",
		type: 'article',
		url: 'https://victorquertelet.com/blog/utiliser-react-suspense-pour-ameliorer-le-chargement',
		siteName: 'Victor Quertelet',
	},
	twitter: {
		card: 'summary',
		title: 'Utiliser React Suspense pour améliorer le chargement',
		description:
			"Découvrez comment utiliser React Suspense pour améliorer l'expérience utilisateur lors du chargement de composants asynchrones.",
	},
	alternates: {
		canonical: 'https://victorquertelet.com/blog/utiliser-react-suspense-pour-ameliorer-le-chargement',
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return children;
}
