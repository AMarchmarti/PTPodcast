import { Params, defer } from "react-router-dom";

import { PodcastService } from "@/domain/services/podcast/PodcastService";
import { useCache } from "@/presentation/hooks/useCache/useCache.hook";
import { TimerType, getTimer } from "@/utils/Timer/timer";
import { PodcastResponse } from "@/domain/model/Podcast/Podcast";

const podcastService = new PodcastService();

const PodcastLoader = async ({ params }: { params: Params }) => {
	const podcastCache = useCache({ expiresIn: getTimer(24, TimerType.HOUR) });
	let podcastPromise: PodcastResponse | null;

	if (!podcastCache.get("podcast")) {
		podcastPromise = await podcastService.getAllPodcasts();
		podcastCache.set("podcast", podcastPromise);
	} else {
		podcastPromise = await podcastCache.get<PodcastResponse>("podcast");
	}

	const podcast = podcastPromise?.feed.entry.find(
		(podcast) => podcast.id.attributes["im:id"] === params.id,
	);

	return defer({ data: { podcast } });
};

export default PodcastLoader;
