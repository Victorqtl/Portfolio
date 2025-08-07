import type { Metadata } from 'next';
import { Poppins, Lora } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

const lora = Lora({
	variable: '--font-lora',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Victor Quertelet',
	description:
		'Développeur Full Stack. Je conçois des applications web fiables et durables, pensées pour grandir avec vos projets.',
	keywords: [
		'développeur full stack',
		'développement web',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'application web',
		'développeur freelance',
	],
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
		url: 'https://victorquertelet.com',
		siteName: 'Victor Quertelet',
		title: 'Victor Quertelet',
		description:
			'Développeur Full Stack. Je conçois des applications web fiables et durables, pensées pour grandir avec vos projets.',
		images: [
			{
				url: '/logo.png',
				width: 1200,
				height: 630,
				alt: 'Victor Quertelet',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Victor Quertelet',
		description:
			'Développeur Full Stack. Je conçois des applications web fiables et durables, pensées pour grandir avec vos projets.',
		images: ['/logo.png'],
	},
	icons: {
		icon: '/logo.png',
		shortcut: '/logo.png',
		apple: '/logo.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='fr'>
			<body className={`${poppins.variable} ${lora.variable} antialiased`}>{children}</body>
		</html>
	);
}
