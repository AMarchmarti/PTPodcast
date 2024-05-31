import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home.page";
import type { RouteObject } from "react-router-dom";
import podcastLoader from "./Loaders/podcastLoader";
import episodeLoader from "./Loaders/episodeLoader";


export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: podcastLoader,
            },
            {
                path: "/podcasts/:id",
                loader: episodeLoader,
                lazy: async () => {
                    let { PodcastPage } = await import("@/presentation/pages/PodcastPage/Podcast.page");
                    return { Component: PodcastPage };
                },
                children: [{
                    path: "/podcasts/:id/",
                    lazy: async () => {
                        let { EpisodeListPage } = await import("@/presentation/pages/EpisodeListPage/EpisodeList.page");
                        return { Component: EpisodeListPage };
                    },
                },
                {
                    path: "podcasts/:id/episodes/:episodeId",
                    lazy: async () => {
                        let { EpisodePage } = await import("@/presentation/pages/EpisodePage/Episode.page");
                        return { Component: EpisodePage };
                    },
                },
                ],
            },
        ],
    },
];