import { CodeBlock } from '@/components/ui/code-block';

export default function ThemeProvider() {
	const code = `"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
    {children}
  </NextThemesProvider>;
}`;
	return (
		<>
			<CodeBlock
				language='jsx'
				code={code}
			/>
		</>
	);
}
