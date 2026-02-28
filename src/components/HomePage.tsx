import { type RankingType, RankingTypeSelector } from "@/components/RankingTypeSelector";

export function HomePage() {
	const handleRankingTypeSelect = (rankingType: RankingType) => {
		const searchParams = new URLSearchParams();
		searchParams.set("siralama", rankingType);
		window.location.href = `/oyna?${searchParams.toString()}`;
	};

	return <RankingTypeSelector onSelectRankingType={handleRankingTypeSelect} />;
}
