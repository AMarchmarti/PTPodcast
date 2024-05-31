
import { PodcastResponse } from "@/domain/model/Podcast/Podcast";
import { get } from "@/infrastructure/HTTP/HttpsService";

/**
 * Service class for managing podcasts.
 */
export class PodcastService {
    private readonly API_URL: string | undefined = `${
        import.meta.env.VITE_BASE_URL
    }`;

    /**
     * Retrieves all podcasts.
     * @returns A promise that resolves to a PodcastResponse object.
     */
    async getAllPodcasts(): Promise<PodcastResponse> {
        const url = new URL(
            `${this.API_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`
        );

        const podcast = await get({ path: url.href });

        return podcast.data;
    }
}
