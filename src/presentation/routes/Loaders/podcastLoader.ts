import { defer } from "react-router-dom";

import { PodcastService } from "@/domain/services/podcast/PodcastService";
import { useCache } from "@/presentation/hooks/useCache/useCache.hook";
import { TimerType, getTimer } from "@/utils/Timer/timer";

const podcast = new PodcastService();

const PodcastLoader = async () => {
	const podcastCache = useCache({ expiresIn: getTimer(24, TimerType.HOUR) });
	let podcastPromise;

	if (!podcastCache.get("podcast")) {
		podcastPromise = await podcast.getAllPodcasts();
		podcastCache.set("podcast", podcastPromise);
	} else {
		podcastPromise = await podcastCache.get("podcast");
	}
	return defer({ data: { podcast: podcastPromise } });
};

export default PodcastLoader;
