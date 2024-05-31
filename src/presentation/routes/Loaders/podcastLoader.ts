import { PodcastService } from "@/domain/services/podcast/PodcastService";
import { useCache } from "@/presentation/hooks/useCache/useCache.hook";
import { TimerType, getTimer } from "@/utils/Timer/timer";

import { defer } from "react-router-dom";

const podcast = new PodcastService();

const podcastLoader = async () => {
  const podcastCache = useCache({ expiresIn: getTimer(24, TimerType.HOUR) });
  let podcastPromise;

  if (!podcastCache.get("podcast")) {
    podcastPromise = await podcast.getAllPodcasts();
    console.log("podcastPromise", podcastPromise);
    podcastCache.set("podcast", podcastPromise);
  } else {
    podcastPromise = await podcastCache.get("podcast");
  }
  return defer({ data: { podcastPromise } });
};

export default podcastLoader;
