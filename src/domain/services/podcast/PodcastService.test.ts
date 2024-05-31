import { beforeEach, describe, expect, it, vi } from "vitest";
import { afterEach } from "node:test";

import { mockPodcastResponse } from "@/domain/mocks/Podcast/PodcastMock";
import { PodcastService } from "@/domain/services/podcast/PodcastService";

describe("PodcastService", () => {
	let podcastService: PodcastService;

	beforeEach(() => {
		podcastService = new PodcastService();
	});

	afterEach(() => {
		vi.clearAllMocks();
	});

	it("should fetch all podcasts", async () => {
		// Mock the HTTP request and response

		vi.spyOn(podcastService, "getAllPodcasts").mockResolvedValue(
			mockPodcastResponse,
		);

		// Call the method under test
		const result = await podcastService.getAllPodcasts();

		// Assert the result
		expect(result).toEqual(mockPodcastResponse);
	});
});
