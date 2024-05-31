import { Suspense } from "react";
import { Await, Outlet, useLoaderData } from "react-router-dom";
import Detail from "@/presentation/components/Detail/Detail.component";
import { Podcast } from "@/domain/model/Podcast/Podcast";

export const PodcastPage = () => {
	const { data } = useLoaderData() as { data: { podcast: Podcast } };
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Await resolve={data}>
				{({ podcast }) => {
					return (
						<section className="flex gap-20">
							<Detail
								title={podcast.title.label}
								subtitle={podcast["im:artist"].label}
								image={podcast["im:image"][0].label}
								description={podcast.summary.label}
							/>
							<Outlet />
						</section>
					);
				}}
			</Await>
		</Suspense>
	);
};
