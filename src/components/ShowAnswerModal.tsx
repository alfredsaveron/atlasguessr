"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { Program } from "@/lib/gameData";
import { Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";

interface ShowAnswerModalProps {
	isOpen: boolean;
	onClose: () => void;
	currentProgram: Program;
	onNewGame: () => void;
	attempts: number;
}

export function ShowAnswerModal({ isOpen, onClose, currentProgram, onNewGame, attempts }: ShowAnswerModalProps) {
	const [showAnswer, setShowAnswer] = useState(false);

	const handleNewGame = () => {
		onNewGame();
		onClose();
		setShowAnswer(false);
	};

	const handleClose = () => {
		if (showAnswer) {
			onNewGame();
		}
		onClose();
		setShowAnswer(false);
	};

	return (
		<Dialog open={isOpen} onOpenChange={handleClose}>
			<DialogContent className="p-0">
				<div className="border-amber-300/70 border-b bg-amber-500/[0.11] px-6 py-5 dark:border-amber-500/30">
					<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200">
						<Eye className="h-5 w-5" />
					</div>
					<DialogHeader>
						<DialogTitle className="text-2xl">Cevabı Görmek Üzeresiniz</DialogTitle>
						<DialogDescription>
							{attempts > 0 ? `${attempts} deneme yaptınız.` : "Henüz tahmin yapmadınız."} Cevabı görürseniz tur sona
							erecek.
						</DialogDescription>
					</DialogHeader>
				</div>

				<div className="space-y-4 px-6 pb-6">
					{!showAnswer ? (
						<>
							<div className="rounded-xl border border-amber-200/70 bg-amber-500/[0.1] p-4 text-sm dark:border-amber-500/25">
								<p className="font-medium">Devam etmek istediğinize emin misiniz?</p>
								<p className="mt-1 text-muted-foreground">
									Cevap açıldığında mevcut oyun kapanır ve yeni tur başlatmanız gerekir.
								</p>
							</div>

							{attempts < 3 && (
								<div className="rounded-xl border border-sky-200/70 bg-sky-500/[0.08] p-4 text-sm dark:border-sky-500/25">
									<p className="font-medium">Kısa bir öneri</p>
									<p className="mt-1 text-muted-foreground">
										İpuçları oldukça detaylı. Birkaç tahmin daha deneyerek cevabı kendiniz bulabilirsiniz.
									</p>
								</div>
							)}

							<div className="grid gap-2 sm:grid-cols-2">
								<Button
									onClick={() => setShowAnswer(true)}
									variant="outline"
									className="w-full border-amber-300/70 bg-amber-500/[0.12] text-amber-900 hover:bg-amber-500/[0.2] dark:border-amber-500/30 dark:text-amber-100"
								>
									<Eye className="h-4 w-4" />
									Cevabı Göster
								</Button>
								<Button onClick={handleClose} className="w-full bg-primary text-primary-foreground">
									<X className="h-4 w-4" />
									Vazgeç
								</Button>
							</div>
						</>
					) : (
						<>
							<div className="space-y-2 rounded-xl border border-sky-200/70 bg-sky-500/[0.08] p-4 text-sm dark:border-sky-500/25">
								<p>
									<span className="font-medium">Üniversite: </span>
									{currentProgram.universityName}
								</p>
								<p>
									<span className="font-medium">Program: </span>
									{currentProgram.programName}
								</p>
								<p>
									<span className="font-medium">Şehir: </span>
									{currentProgram.cityName}
								</p>
							</div>

							<div className="rounded-xl border border-violet-200/70 bg-violet-500/[0.08] p-4 text-muted-foreground text-sm dark:border-violet-500/25">
								Bu tur tamamlandı. Yeni bir oyun başlatabilirsiniz.
							</div>

							<Button
								onClick={handleNewGame}
								className="w-full bg-[linear-gradient(135deg,oklch(0.51_0.15_258),oklch(0.45_0.12_275))] text-white hover:opacity-95"
							>
								<EyeOff className="h-4 w-4" />
								Yeni Oyun Başlat
							</Button>
						</>
					)}

					{currentProgram.id !== undefined && (
						<p className="text-center text-muted-foreground text-xs">Oyun #{currentProgram.id}</p>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
}
