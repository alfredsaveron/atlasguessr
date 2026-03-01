"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export type RankingType = "Sayısal" | "Eşit Ağırlık" | "Sözel" | "Yabancı Dil" | "Rastgele";

interface RankingTypeSelectorProps {
	onSelectRankingType: (rankingType: RankingType) => void;
}

export function RankingTypeSelector({ onSelectRankingType }: RankingTypeSelectorProps) {
	const rankingTypes: {
		type: RankingType;
		description: string;
		toneClass: string;
		dotClass: string;
	}[] = [
		{
			type: "Sayısal",
			description: "Mühendislik, tıp ve fen odaklı programlar",
			toneClass: "border-l-sky-500 bg-sky-500/[0.08]",
			dotClass: "bg-sky-500",
		},
		{
			type: "Eşit Ağırlık",
			description: "İktisat, işletme, hukuk gibi bölümler",
			toneClass: "border-l-emerald-500 bg-emerald-500/[0.08]",
			dotClass: "bg-emerald-500",
		},
		{
			type: "Sözel",
			description: "Edebiyat, tarih, sosyoloji ve benzeri alanlar",
			toneClass: "border-l-fuchsia-500 bg-fuchsia-500/[0.08]",
			dotClass: "bg-fuchsia-500",
		},
		{
			type: "Yabancı Dil",
			description: "Dil puanı ile öğrenci alan programlar",
			toneClass: "border-l-amber-500 bg-amber-500/[0.1]",
			dotClass: "bg-amber-500",
		},
		{
			type: "Rastgele",
			description: "Tüm sıralama türlerinden karışık seçim",
			toneClass: "border-l-violet-500 bg-violet-500/[0.08]",
			dotClass: "bg-violet-500",
		},
	];

	return (
		<div className="relative flex min-h-screen items-center justify-center px-3 py-8 sm:px-6">
			<div className="-z-10 absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(36,71,216,0.14),transparent_45%),radial-gradient(circle_at_86%_14%,rgba(245,158,11,0.14),transparent_42%)]" />
			<Card className="w-full max-w-3xl border-border/80 bg-card/95 shadow-lg">
				<CardHeader className="border-border/70 border-b px-5 py-6 sm:px-8 sm:py-7">
					<div className="mb-3 inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-medium text-primary text-xs uppercase tracking-[0.12em]">
						Atlasguessr
					</div>
					<CardTitle className="text-3xl sm:text-4xl">Sıralama Türünü Seçin</CardTitle>
					<CardDescription className="max-w-xl text-sm sm:text-base">
						Üniversite programını tahmin etme oyununa hangi kategoriyle başlamak istediğinizi seçin.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-2 px-3 py-4 sm:px-4 sm:py-5">
					{rankingTypes.map((rankingTypeInfo, index) => (
						<Button
							key={rankingTypeInfo.type}
							variant="ghost"
							className={`group h-auto w-full justify-between rounded-xl border border-border/60 border-l-4 px-3 py-4 text-left hover:border-border hover:bg-secondary sm:px-4 ${rankingTypeInfo.toneClass}`}
							onClick={() => onSelectRankingType(rankingTypeInfo.type)}
						>
							<div className="flex items-start gap-4">
								<span className="mt-0.5 min-w-6 font-semibold text-muted-foreground text-xs">
									{String(index + 1).padStart(2, "0")}
								</span>
								<div>
									<div className="flex items-center gap-2 font-semibold text-base text-foreground sm:text-lg">
										<span className={`inline-block h-1.5 w-1.5 rounded-full ${rankingTypeInfo.dotClass}`} />
										{rankingTypeInfo.type}
									</div>
									<div className="mt-1 text-muted-foreground text-xs sm:text-sm">{rankingTypeInfo.description}</div>
								</div>
							</div>
							<ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
						</Button>
					))}
				</CardContent>
			</Card>
		</div>
	);
}
