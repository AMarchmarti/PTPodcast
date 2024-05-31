import { Suspense, createRef } from "react";
import { Await, Link, useLoaderData, useParams } from "react-router-dom";

import { EpisodeResponse } from "@/domain/model/Episode/Episode";
import Table from "@/presentation/components/Table/Table.component";
import { formatDate } from "@/utils/Date/formatDate";
import { formatTime } from "@/utils/Timer/timer";

export const EpisodeListPage = () => {
	const { data } = useLoaderData() as { data: { episodes: EpisodeResponse } };
	const params = useParams();
	const columns = [
		{ id: "title", label: "Title" },
		{ id: "releaseDate", label: "Release Date" },
		{ id: "duration", label: "Duration" },
	];
	const handleClickedRow = (row: {
		title: any;
		releaseDate: string;
		duration: string;
	}) => {
		row.title.ref.current.click();
	};
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Await resolve={data}>
				{({ episodes }: { episodes: EpisodeResponse }) => {
					const data = episodes.results
						.filter((episode) => episode.kind === "podcast-episode")
						.map((episode) => {
							return {
								title: (
									<Link
										ref={createRef()}
										to={`/podcasts/${params.id}/episodes/${episode.trackId}`}
									>
										{episode.trackName}
									</Link>
								),
								releaseDate: formatDate(
									episode.releaseDate.toString(),
								),
								duration: formatTime(episode.trackTimeMillis),
							};
						});
					const podcast = episodes.results.find(
						(episode) => episode.kind === "podcast",
					);
					return (
						<section className="flex w-full flex-col gap-8">
							<div className="border rounded-md shadow-md p-4">
								<h2 className="text-xl font-bold">
									Results: {podcast?.trackCount}
								</h2>
							</div>
							<div className="flex w-full grow rounded-md border  p-4 shadow-md">
								<Table
									data={data}
									columns={columns}
									pointer={true}
									onRowClick={(row) => {
										handleClickedRow(row);
									}}
								/>
							</div>
						</section>
					);
				}}
			</Await>
		</Suspense>
	);
};
