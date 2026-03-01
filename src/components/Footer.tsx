"use client";

export function Footer() {
	return (
		<footer className="mt-10 border-border border-t pt-5 sm:mt-14">
			<div className="mb-5 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(14,116,244,0.22),rgba(16,185,129,0.2),transparent)]" />
			<div className="flex flex-col items-start justify-between gap-2 text-sm sm:flex-row sm:items-center">
				<p className="text-muted-foreground">
					Atlasguessr by{" "}
					<a
						href="https://ardasoyturk.com"
						target="_blank"
						rel="noopener noreferrer"
						className="font-semibold text-foreground underline decoration-sky-500/40 underline-offset-4 hover:decoration-emerald-500/50"
					>
						Arda Soyturk
					</a>
				</p>
				<p className="text-muted-foreground text-xs">Türkiye üniversite programları için tahmin oyunu</p>
			</div>
		</footer>
	);
}
