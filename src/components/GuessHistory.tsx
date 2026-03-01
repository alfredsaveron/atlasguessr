"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Program } from "@/lib/gameData";

interface GuessHistoryProps {
	guessHistory: Array<{
		university: string;
		program: string;
		universityMatch: boolean;
		programMatch: boolean;
	}>;
	currentProgram: Program;
	isExactMatch: (guess: string, target: string) => boolean;
}

export function GuessHistory({ guessHistory, currentProgram, isExactMatch }: GuessHistoryProps) {
	if (guessHistory.length === 0) return null;

	return (
		<Card className="mb-5 border-border/80 bg-card/96 sm:mb-7">
			<CardHeader>
				<CardTitle className="text-xl">Tahmin Geçmişi</CardTitle>
			</CardHeader>
			<CardContent className="space-y-2.5">
				{guessHistory.map((guess, index) => (
					<div
						key={`${guess.university}-${guess.program}-${index}`}
						className="grid grid-cols-1 gap-2 rounded-xl border border-slate-200/70 bg-slate-500/[0.06] p-3 lg:grid-cols-2 dark:border-slate-500/25"
					>
						<div
							className={`rounded-lg border p-2.5 ${
								guess.universityMatch
									? "border-emerald-200/70 bg-emerald-500/[0.12] dark:border-emerald-500/30"
									: "border-rose-200/70 bg-rose-500/[0.12] dark:border-rose-500/30"
							}`}
						>
							<p className="font-semibold text-sm">Üniversite</p>
							<p className="mt-1 break-words text-sm">{guess.university}</p>
							<p className="mt-1 text-xs">{guess.universityMatch ? "Doğru" : "Yanlış"}</p>
							{guess.universityMatch && !isExactMatch(guess.university, currentProgram.universityName) && (
								<p className="mt-1 text-xs">Doğru cevap: {currentProgram.universityName}</p>
							)}
						</div>
						<div
							className={`rounded-lg border p-2.5 ${
								guess.programMatch
									? "border-sky-200/70 bg-sky-500/[0.12] dark:border-sky-500/30"
									: "border-rose-200/70 bg-rose-500/[0.12] dark:border-rose-500/30"
							}`}
						>
							<p className="font-semibold text-sm">Program</p>
							<p className="mt-1 break-words text-sm">{guess.program}</p>
							<p className="mt-1 text-xs">{guess.programMatch ? "Doğru" : "Yanlış"}</p>
							{guess.programMatch && guess.program !== currentProgram.programName && (
								<p className="mt-1 text-xs">Doğru cevap: {currentProgram.programName}</p>
							)}
						</div>
					</div>
				))}
			</CardContent>
		</Card>
	);
}
