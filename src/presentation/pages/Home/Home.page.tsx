import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";

import type { Podcast, PodcastResponse } from "@/domain/model/Podcast/Podcast";
import Card from "@/presentation/components/Card/Card.component";
import { useFilter } from "@/presentation/hooks/useFilter/useFilter.hook";

const Home = () => {
	const { data } = useLoaderData() as { data: { podcast: PodcastResponse } };

	const filterData = (data: Podcast[], searchText: string) => {
		return data.filter((card) =>
			card.title.label.toLowerCase().includes(searchText.toLowerCase()),
		);
	};

	const filter = useFilter({
		initialValue: "",
	});

	return (
		<section className="flex flex-col gap-16">
			<input
				type="text"
				placeholder="Search"
				value={filter.input}
				ref={filter.ref}
				onChange={filter.handleChange}
				className="w-64 self-end rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
			<Suspense fallback={<div>Loading...</div>}>
				<ul className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
					<Await resolve={data}>
						{({ podcast }) => {
							const filteredData = filterData(
								podcast.feed.entry,
								filter.input,
							);
							return filteredData.map(
								(podcastEntity: Podcast) => (
									<Link
										to={`/podcasts/${podcastEntity.id.attributes["im:id"]}`}
										key={
											podcastEntity.id.attributes["im:id"]
										}
									>
										<Card
											title={podcastEntity.title.label}
											subtitle={
												"Author: " +
												podcastEntity["im:artist"].label
											}
											image={
												podcastEntity["im:image"][0]
													.label
											}
										/>
									</Link>
								),
							);
						}}
					</Await>
				</ul>
			</Suspense>
		</section>
	);
};

export default Home;
