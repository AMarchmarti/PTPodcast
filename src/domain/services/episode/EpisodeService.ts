import { LIMIT_EPISODES } from "@/constants/Global";
import { EpisodeResponse } from "@/domain/model/Episode/Episode";
import { get } from "@/infrastructure/HTTP/HttpsService";

/**
 * Service class for managing episodes.
 */
export class EpisodeService {
    private readonly API_URL: string | undefined = `${import.meta.env.VITE_BASE_URL}`;

    /**
     * Retrieves all episodes by ID.
     * @param id - The ID of the episode.
     * @returns A promise that resolves to the episode response.
     */
    async getAllEpisodesById(id: string): Promise<EpisodeResponse> {
        const url = new URL(`${this.API_URL}/lookup`);
        url.searchParams.append("id", id);
        url.searchParams.append("limit", LIMIT_EPISODES.toString());

        const episode = await get({ path: url.href });

        return episode.data;
    }
}
