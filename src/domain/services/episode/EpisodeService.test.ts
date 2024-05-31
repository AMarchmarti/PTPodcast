import { beforeEach, describe, expect, it, vi } from "vitest";

import { EpisodeService } from "./EpisodeService";
import { mockEpisodeResponse } from "@/domain/mocks/Episode/EpisodeMock";

describe("EpisodeService", () => {
	let episodeService: EpisodeService;

	beforeEach(() => {
		episodeService = new EpisodeService();
	});

	it("should fetch all episodes by id", async () => {
		// Arrange
		const id = "123";

		// Mock the HTTP request and response
		vi.spyOn(episodeService, "getAllEpisodesById").mockResolvedValue(
			mockEpisodeResponse,
		);

		// Act
		const result = await episodeService.getAllEpisodesById(id);

		// Assert
		expect(result).toEqual(mockEpisodeResponse);
	});
});
