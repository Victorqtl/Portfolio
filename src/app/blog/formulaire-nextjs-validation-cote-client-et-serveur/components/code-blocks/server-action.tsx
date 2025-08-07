import { CodeBlock } from '@/components/ui/code-block';

export default function ServerAction() {
	const code = `"use server";

import { userSchema } from "@/lib/validation";
import { prisma } from "@/lib/prisma";

export async function createUser(formData: FormData) {
  const parsed = userSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
  });

  if (!parsed.success) {
    // On retourne les erreurs sous un format exploitable côté client
    return { error: parsed.error.flatten().fieldErrors };
  }

  const data = parsed.data;

  await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
    },
  });

  return { success: true };
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
