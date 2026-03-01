"use client";

import { Badge } from "@/components/ui/badge";

interface GameStatsProps {
	attempts: number;
	universityCorrect: boolean;
	programCorrect: boolean;
}

export function GameStats({ attempts, universityCorrect, programCorrect }: GameStatsProps) {
	return (
		<div className="mb-5 flex flex-wrap justify-center gap-2 sm:mb-7 sm:gap-3">
			<Badge variant="outline" className="border-slate-300/70 bg-slate-500/[0.08] dark:border-slate-500/30">
				Deneme: {attempts}
			</Badge>
			<Badge
				variant="outline"
				className={
					universityCorrect
						? "border-emerald-300/70 bg-emerald-500/[0.16] text-emerald-900 dark:border-emerald-500/30 dark:text-emerald-100"
						: "border-amber-300/70 bg-amber-500/[0.14] text-amber-900 dark:border-amber-500/30 dark:text-amber-100"
				}
			>
				Üniversite: {universityCorrect ? "Doğru" : "Bekleniyor"}
			</Badge>
			<Badge
				variant="outline"
				className={
					programCorrect
						? "border-sky-300/70 bg-sky-500/[0.16] text-sky-900 dark:border-sky-500/30 dark:text-sky-100"
						: "border-violet-300/70 bg-violet-500/[0.14] text-violet-900 dark:border-violet-500/30 dark:text-violet-100"
				}
			>
				Program: {programCorrect ? "Doğru" : "Bekleniyor"}
			</Badge>
		</div>
	);
}
