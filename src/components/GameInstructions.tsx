"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function GameInstructions() {
	const items = [
		"İpuçlarını kullanarak hem üniversiteyi hem program adını tahmin edin.",
		"Her tahminden sonra iki alanın doğruluk durumunu göreceksiniz.",
		"Doğru tahmin edilen alanlar sabit kalır, yanlış alanlar tekrar girilir.",
		"Her iki alanı doğru bulduğunuzda oyun tamamlanır.",
		"İpuçları: şehir, üniversite türü, ücret durumu ve son 4 yıl sıralamaları.",
	];

	return (
		<Card className="border-border/80 bg-card/96">
			<CardHeader>
				<CardTitle className="text-xl">Nasıl Oynanır</CardTitle>
			</CardHeader>
			<CardContent>
				<ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
					{items.map((item, index) => (
						<li key={item} className="flex gap-2">
							<span
								className={`mt-[0.42rem] inline-block h-1.5 w-1.5 rounded-full ${
									index % 3 === 0 ? "bg-sky-500/80" : index % 3 === 1 ? "bg-emerald-500/80" : "bg-violet-500/80"
								}`}
							/>
							<span>{item}</span>
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
}
