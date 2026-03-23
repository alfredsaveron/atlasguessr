"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { Program } from "@/lib/gameData";
import { CheckCircle2, Copy, RefreshCw, Share2 } from "lucide-preact";
import { useState } from "preact/compat";

interface GameWonModalProps {
	isOpen: boolean;
	onClose: () => void;
	currentProgram: Program;
	attempts: number;
	onNewGame: () => void;
	guessHistory: Array<{
		university: string;
		program: string;
		universityMatch: boolean;
		programMatch: boolean;
	}>;
}

export function GameWonModal({
	isOpen,
	onClose,
	currentProgram,
	attempts,
	onNewGame,
	guessHistory,
}: GameWonModalProps) {
	const [copied, setCopied] = useState(false);

	const generateShareText = () => {
		const gameId = currentProgram.id || 0;
		const attemptSummary = guessHistory
			.map((guess) => `${guess.universityMatch ? "D" : "Y"}${guess.programMatch ? "D" : "Y"}`)
			.join(" ");

		return `Atlasguessr #${gameId}
Üniversite: ${currentProgram.universityName}
Program: ${currentProgram.programName}
Şehir: ${currentProgram.cityName}
Deneme: ${attempts}
Tahmin Özeti: ${attemptSummary}
atlasguessr.xyz`;
	};

	const shareResult = async () => {
		const shareText = generateShareText();
		const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;

		if (isMobile && navigator.share) {
			try {
				await navigator.share({
					title: "Atlasguessr",
					text: shareText,
				});
			} catch {
				await copyToClipboard(shareText);
			}
		} else {
			await copyToClipboard(shareText);
		}
	};

	const copyToClipboard = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 1800);
		} catch (error) {
			console.error("Failed to copy to clipboard:", error);
		}
	};

	const handleNewGame = () => {
		onNewGame();
		onClose();
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="p-0">
				<div className="border-emerald-300/70 border-b bg-emerald-500/[0.1] px-6 py-5 dark:border-emerald-500/30">
					<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
						<CheckCircle2 className="h-5 w-5" />
					</div>
					<DialogHeader>
						<DialogTitle className="text-2xl">Tebrikler</DialogTitle>
						<DialogDescription>{attempts} denemede doğru cevabı buldunuz.</DialogDescription>
					</DialogHeader>
				</div>

				<div className="space-y-4 px-6 pb-6">
					<div className="grid gap-2 rounded-xl border border-sky-200/70 bg-sky-500/[0.08] p-3 dark:border-sky-500/25">
						<p className="text-muted-foreground text-xs uppercase tracking-wide">Üniversite</p>
						<p className="font-semibold text-sm sm:text-base">{currentProgram.universityName}</p>
						<p className="text-muted-foreground text-xs uppercase tracking-wide">Program</p>
						<p className="font-semibold text-sm sm:text-base">{currentProgram.programName}</p>
						<p className="text-muted-foreground text-xs uppercase tracking-wide">Şehir</p>
						<p className="font-semibold text-sm sm:text-base">{currentProgram.cityName}</p>
					</div>

					<div className="rounded-xl border border-violet-200/70 bg-violet-500/[0.08] p-3 dark:border-violet-500/25">
						<p className="mb-2 font-medium text-sm">Tahmin Geçmişi</p>
						<div className="flex flex-wrap gap-1.5">
							{guessHistory.map((guess, index) => (
								<div
									key={`${guess.university}-${guess.program}-${index}`}
									className="flex gap-1"
									title={`${index + 1}. tahmin`}
								>
									<div
										className={`h-4 w-4 rounded-sm ${guess.universityMatch ? "bg-emerald-600/80" : "bg-rose-600/75"}`}
									/>
									<div className={`h-4 w-4 rounded-sm ${guess.programMatch ? "bg-sky-600/80" : "bg-rose-600/75"}`} />
								</div>
							))}
						</div>
					</div>

					<div className="grid gap-2 sm:grid-cols-2">
						<Button
							onClick={shareResult}
							variant="outline"
							className="w-full border-sky-300/70 bg-sky-500/[0.1] text-sky-900 hover:bg-sky-500/[0.2] dark:border-sky-500/30 dark:text-sky-100"
						>
							{copied ? <Copy className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
							{copied ? "Kopyalandı" : "Paylaş"}
						</Button>
						<Button
							onClick={handleNewGame}
							className="w-full bg-[linear-gradient(135deg,oklch(0.6_0.14_160),oklch(0.5_0.13_210))] text-white hover:opacity-95"
						>
							<RefreshCw className="h-4 w-4" />
							Yeni Oyun
						</Button>
					</div>

					{currentProgram.id !== undefined && (
						<p className="text-center text-muted-foreground text-xs">Oyun #{currentProgram.id}</p>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
}
