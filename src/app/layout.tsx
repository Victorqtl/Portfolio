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
	title: 'Victor Quertelet - Développeur Full Stack',
	description: 'Développeur Full Stack',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='fr'
			suppressHydrationWarning>
			<body className={`${poppins.variable} ${lora.variable} antialiased`}>
				<main className='max-w-[1440px] mx-auto h-full w-full'>{children}</main>
			</body>
		</html>
	);
}
