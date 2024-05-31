import type { RouteObject } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home.page";
import EpisodeLoader from "./Loaders/episodeLoader";
import PodcastLoader from "./Loaders/podcastLoader";
import PodcastsLoader from "./Loaders/podcastsLoader";
import EpisodesLoader from "./Loaders/episodesLoader";

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: PodcastsLoader,
			},
			{
				path: "/podcasts/:id",
				loader: PodcastLoader,
				lazy: async () => {
					const { PodcastPage } = await import(
						"@/presentation/pages/PodcastPage/Podcast.page"
					);
					return { Component: PodcastPage };
				},
				children: [
					{
						path: "/podcasts/:id/",
						loader: EpisodesLoader,
						lazy: async () => {
							const { EpisodeListPage } = await import(
								"@/presentation/pages/EpisodeListPage/EpisodeList.page"
							);
							return { Component: EpisodeListPage };
						},
					},
					{
						path: "/podcasts/:id/episodes/:episode",
						loader: EpisodeLoader,
						lazy: async () => {
							const { EpisodePage } = await import(
								"@/presentation/pages/EpisodePage/Episode.page"
							);
							return { Component: EpisodePage };
						},
					},
				],
			},
		],
	},
];
