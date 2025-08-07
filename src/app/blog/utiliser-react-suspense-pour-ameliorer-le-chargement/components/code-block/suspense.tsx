import { CodeBlock } from '@/components/ui/code-block';

export default function Suspense() {
	const code = `"use client";

import React, { Suspense } from "react";
import MonComposantAsynchrone from "./MonComposantAsynchrone";

export default function Page() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <MonComposantAsynchrone />
    </Suspense>
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
