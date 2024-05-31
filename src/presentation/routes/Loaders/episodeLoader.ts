import { defer } from "react-router-dom";
import type { Params } from "react-router-dom";

import { EpisodeService } from "@/domain/services/episode/EpisodeService";
import { useCache } from "@/presentation/hooks/useCache/useCache.hook";
import { TimerType, getTimer } from "@/utils/Timer/timer";

const episodes = new EpisodeService();
const EpisodeLoader = async ({ params }: { params: Params }) => {
	const episodeCache = useCache({ expiresIn: getTimer(24, TimerType.HOUR) });
	let episodePromise;
	if (!params.id) return defer({ data: { episodePromise: null } });

	if (!episodeCache.get(params.id)) {
		episodePromise = await episodes.getAllEpisodesById(params.id || "");

		episodeCache.set(params.id, episodePromise);
	} else {
		episodePromise = await episodeCache.get(params.id);
	}
	return defer({ data: { episodePromise } });
};

export default EpisodeLoader;
