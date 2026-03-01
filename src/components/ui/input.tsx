import type * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"flex h-11 w-full min-w-0 rounded-lg border border-input bg-card px-3 py-2 text-sm outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
				"focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring",
				"aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30",
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
