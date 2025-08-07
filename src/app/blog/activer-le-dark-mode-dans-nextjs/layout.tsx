import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Activer le dark mode dans Next.js',
	description: 'Apprenez à implémenter le dark mode dans votre application Next.js avec next-themes et shadcn/ui.',
	openGraph: {
		title: 'Activer le dark mode dans Next.js',
		description:
			'Apprenez à implémenter le dark mode dans votre application Next.js avec next-themes et shadcn/ui.',
		type: 'article',
		url: 'https://victorquertelet.com/blog/activer-le-dark-mode-dans-nextjs',
		siteName: 'Victor Quertelet',
	},
	twitter: {
		card: 'summary',
		title: 'Activer le dark mode dans Next.js',
		description:
			'Apprenez à implémenter le dark mode dans votre application Next.js avec next-themes et shadcn/ui.',
	},
	alternates: {
		canonical: 'https://victor.dev/blog/activer-le-dark-mode-dans-nextjs',
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return children;
}
