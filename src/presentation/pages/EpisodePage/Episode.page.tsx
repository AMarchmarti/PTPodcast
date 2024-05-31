import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

import { Episode } from "@/domain/model/Episode/Episode";

export const EpisodePage = () => {
	const { data } = useLoaderData() as { data: { episode: Episode } };

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Await resolve={data}>
				{({ episode }: { episode: Episode }) => {
					return (
						<section className="flex h-min w-full flex-col justify-between gap-16 rounded-md border p-8 shadow-md">
							<div className="flex flex-col gap-4">
								<h1 className="text-2xl font-bold">
									{episode.trackName}
								</h1>
								<p>{episode.description}</p>
							</div>
							<audio controls={true} className="w-full">
								<source
									src={episode.previewUrl}
									type="audio/mp3"
								/>
							</audio>
						</section>
					);
				}}
			</Await>
		</Suspense>
	);
};
