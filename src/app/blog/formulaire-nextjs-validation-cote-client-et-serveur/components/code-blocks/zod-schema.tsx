import { CodeBlock } from '@/components/ui/code-block';

export default function ZodSchema() {
	const code = `import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2, "Le nom est trop court"),
  email: z.string().email("Adresse e-mail invalide"),
});

export type UserFormData = z.infer<typeof userSchema>;`;
	return (
		<>
			<CodeBlock
				language='jsx'
				code={code}
			/>
		</>
	);
}
