import { CodeBlock } from '@/components/ui/code-block';

export default function InstallDependencies() {
	const code = `npm install next-themes
npx shadcn-ui init
npx shadcn-ui add dropdown-menu
npm install lucide-react`;
	return (
		<>
			<CodeBlock
				language='jsx'
				code={code}
			/>
		</>
	);
}
