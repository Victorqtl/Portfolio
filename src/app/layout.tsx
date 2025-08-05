import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
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
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<main className='max-w-[1440px] mx-auto h-screen w-full'>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
