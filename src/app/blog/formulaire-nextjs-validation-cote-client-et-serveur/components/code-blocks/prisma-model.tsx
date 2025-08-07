import { CodeBlock } from '@/components/ui/code-block';

export default function PrismaModel() {
	const code = `model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
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
