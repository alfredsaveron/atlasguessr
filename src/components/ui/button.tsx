import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold text-sm tracking-tight outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:opacity-90",
				destructive: "bg-destructive text-white hover:opacity-90",
				outline: "border border-border bg-card text-foreground hover:bg-secondary",
				secondary: "bg-secondary text-secondary-foreground hover:bg-muted",
				ghost: "text-foreground hover:bg-secondary",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 px-4",
				sm: "h-9 px-3",
				lg: "h-11 px-6",
				icon: "size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";

	return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
