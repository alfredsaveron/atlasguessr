"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Program } from "@/lib/gameData";
import { DollarSign, ListOrdered, MapPin, Trophy, University } from "lucide-preact";
import type { ComponentType } from "preact/compat";

interface HintsCardProps {
	currentProgram: Program;
}

function HintRow({
	label,
	value,
	icon: Icon,
	toneClass,
	iconClass,
}: {
	label: string;
	value: string;
	icon: ComponentType<{ className?: string }>;
	toneClass: string;
	iconClass: string;
}) {
	return (
		<div className={`flex items-center gap-3 rounded-xl border px-3 py-3 ${toneClass}`}>
			<Icon className={`h-4 w-4 ${iconClass}`} />
			<div className="min-w-0">
				<p className="text-muted-foreground text-xs uppercase tracking-wide">{label}</p>
				<p className="truncate font-medium text-sm sm:text-base">{value}</p>
			</div>
		</div>
	);
}

export function HintsCard({ currentProgram }: HintsCardProps) {
	return (
		<Card className="border-border/80 bg-card/95">
			<CardHeader>
				<CardTitle className="text-xl">İpuçları</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<HintRow
					label="Şehir"
					value={currentProgram.cityName}
					icon={MapPin}
					toneClass="border-sky-200/60 bg-sky-500/[0.08] dark:border-sky-500/25"
					iconClass="text-sky-700 dark:text-sky-300"
				/>
				<HintRow
					label="Üniversite Türü"
					value={currentProgram.programType}
					icon={University}
					toneClass="border-emerald-200/60 bg-emerald-500/[0.08] dark:border-emerald-500/25"
					iconClass="text-emerald-700 dark:text-emerald-300"
				/>
				<HintRow
					label="Ücret Durumu"
					value={currentProgram.scholarshipType}
					icon={DollarSign}
					toneClass="border-violet-200/60 bg-violet-500/[0.08] dark:border-violet-500/25"
					iconClass="text-violet-700 dark:text-violet-300"
				/>
				<HintRow
					label="Sıralama Türü"
					value={currentProgram.rankingType}
					icon={ListOrdered}
					toneClass="border-amber-200/60 bg-amber-500/[0.1] dark:border-amber-500/25"
					iconClass="text-amber-700 dark:text-amber-300"
				/>

				<div className="rounded-xl border border-rose-200/70 bg-rose-500/[0.08] p-3 dark:border-rose-500/25">
					<div className="mb-2 flex items-center gap-2">
						<Trophy className="h-4 w-4 text-rose-700 dark:text-rose-300" />
						<p className="font-medium text-sm">Son Yerleşen Sıralamaları</p>
					</div>
					<ul className="space-y-1 text-muted-foreground text-sm">
						{currentProgram.rank.map((rank, index) => (
							<li key={rank}>
								{2024 - index}: {rank}
							</li>
						))}
					</ul>
				</div>
			</CardContent>
		</Card>
	);
}
