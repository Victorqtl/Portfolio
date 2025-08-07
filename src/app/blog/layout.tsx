import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blog | Victor Quertelet',
	description:
		'Articles et réflexions sur le développement web, les technologies modernes et les bonnes pratiques. Découvrez mes expériences et conseils en tant que développeur full stack.',
	keywords: [
		'blog développement web',
		'articles programmation',
		'tutoriels JavaScript',
		'React blog',
		'Next.js articles',
		'développement full stack',
		'bonnes pratiques',
		'expérience développeur',
		'conseils programmation',
	],
	authors: [{ name: 'Victor Quertelet' }],
	creator: 'Victor Quertelet',
	publisher: 'Victor Quertelet',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		type: 'website',
		locale: 'fr_FR',
		url: 'https://victorquertelet.com/blog',
		siteName: 'Victor Quertelet',
		title: 'Blog - Victor Quertelet',
		description:
			'Articles et réflexions sur le développement web, les technologies modernes et les bonnes pratiques. Découvrez mes expériences et conseils en tant que développeur full stack.',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Blog - Victor Quertelet',
		description:
			'Articles et réflexions sur le développement web, les technologies modernes et les bonnes pratiques.',
		images: ['/logo.png'],
	},
	alternates: {
		canonical: 'https://victorquertelet.com/blog',
		types: {
			'application/rss+xml': [{ title: 'Blog RSS Feed', url: '/blog/rss.xml' }],
		},
	},
};

export default function BlogLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
