import { CodeBlock } from '@/components/ui/code-block';

export default function Form() {
	const code = `"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, UserFormData } from "@/lib/validation";
import { createUser } from "@/actions/create-user";
import { useState } from "react";

export default function UserForm() {
  const [serverErrors, setServerErrors] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (data: UserFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);

    const result = await createUser(formData);

    if (result?.error) {
      setServerErrors(result.error);
    } else {
      alert("Utilisateur créé !");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input placeholder="Nom" {...register("name")} />
      <p>{errors.name?.message || serverErrors?.name}</p>

      <input placeholder="Email" {...register("email")} />
      <p>{errors.email?.message || serverErrors?.email}</p>

      <button type="submit">Envoyer</button>
    </form>
  );
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
