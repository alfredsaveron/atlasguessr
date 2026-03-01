"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, RefreshCw } from "lucide-react";

interface ActionButtonsProps {
	gameWon: boolean;
	onShowAnswer: () => void;
	onResetGame: () => void;
	onNewGameSession?: () => void;
}

export function ActionButtons({ gameWon, onShowAnswer, onResetGame, onNewGameSession }: ActionButtonsProps) {
	return (
		<div className="mb-8 grid gap-2 sm:grid-cols-3">
			<Button
				onClick={onShowAnswer}
				variant="outline"
				className="w-full justify-center border-amber-300/70 bg-amber-500/[0.12] text-amber-900 hover:bg-amber-500/[0.2] dark:border-amber-500/30 dark:text-amber-100"
				disabled={gameWon}
			>
				<Eye className="h-4 w-4" />
				Cevabı Göster
			</Button>
			<Button
				onClick={onResetGame}
				className="w-full justify-center bg-[linear-gradient(135deg,oklch(0.51_0.15_258),oklch(0.45_0.12_275))] text-white hover:opacity-95"
			>
				<RefreshCw className="h-4 w-4" />
				Yeni Oyun
			</Button>
			{onNewGameSession ? (
				<Button
					onClick={onNewGameSession}
					variant="secondary"
					className="w-full justify-center border border-violet-300/70 bg-violet-500/[0.12] text-violet-900 hover:bg-violet-500/[0.2] dark:border-violet-500/30 dark:text-violet-100"
				>
					<ArrowLeft className="h-4 w-4" />
					Kategori Değiştir
				</Button>
			) : (
				<div />
			)}
		</div>
	);
}
