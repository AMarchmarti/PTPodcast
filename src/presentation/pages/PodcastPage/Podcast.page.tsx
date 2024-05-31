import { Suspense } from "react";
import {
	Await,
	Link,
	Outlet,
	useLoaderData,
	useParams,
} from "react-router-dom";

import Detail from "@/presentation/components/Detail/Detail.component";
import { Podcast } from "@/domain/model/Podcast/Podcast";

export const PodcastPage = () => {
	const { data } = useLoaderData() as { data: { podcast: Podcast } };
	const params = useParams();
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Await resolve={data}>
				{({ podcast }) => {
					return (
						<section className="flex w-full gap-20">
							<Link
								to={`/podcasts/${params.id}`}
								className="md:w-1/2 lg:w-1/3 xl:w-1/4"
							>
								<Detail
									title={podcast.title.label}
									subtitle={podcast["im:artist"].label}
									image={podcast["im:image"][0].label}
									description={podcast.summary.label}
								/>
							</Link>
							<Outlet />
						</section>
					);
				}}
			</Await>
		</Suspense>
	);
};
