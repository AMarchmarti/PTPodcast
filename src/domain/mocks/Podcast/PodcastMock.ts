import type { PodcastResponse } from "@/domain/model/Podcast/Podcast";
import {
	Currency,
	FluffyLabel,
	IMPriceLabel,
	PurpleLabel,
	Rel,
	Type,
} from "@/domain/model/Podcast/Podcast";

export const mockPodcastResponse: PodcastResponse = {
	author: {
		name: { label: "Podcast Author" },
		uri: { label: "http://author.uri" },
	},
	entry: [
		{
			"im:name": { label: "Podcast Episode 1" },
			"im:image": [
				{ label: "http://image1.url", attributes: { height: "55" } },
				{ label: "http://image2.url", attributes: { height: "60" } },
				{ label: "http://image3.url", attributes: { height: "170" } },
			],
			summary: { label: "Summary of Podcast Episode 1" },
			"im:price": {
				label: IMPriceLabel.Get,
				attributes: { amount: "0", currency: Currency.Usd },
			},
			"im:contentType": {
				attributes: {
					term: FluffyLabel.Podcast,
					label: FluffyLabel.Podcast,
				},
			},
			rights: { label: "All rights reserved" },
			title: { label: "Podcast Episode 1 Title" },
			link: {
				attributes: {
					rel: Rel.Alternate,
					type: Type.TextHTML,
					href: "http://episode1.url",
				},
			},
			id: { label: "http://episode1.id", attributes: { "im:id": "1" } },
			"im:artist": {
				label: "Podcast Artist",
				attributes: { href: "http://artist.url" },
			},
			category: {
				attributes: {
					"im:id": "1301",
					term: PurpleLabel.Music,
					scheme: "http://scheme.url",
					label: PurpleLabel.Music,
				},
			},
			"im:releaseDate": {
				label: new Date("2023-01-01T00:00:00Z"),
				attributes: { label: "January 1, 2023" },
			},
		},
		{
			"im:name": { label: "Podcast Episode 2" },
			"im:image": [
				{ label: "http://image4.url", attributes: { height: "55" } },
				{ label: "http://image5.url", attributes: { height: "60" } },
				{ label: "http://image6.url", attributes: { height: "170" } },
			],
			summary: { label: "Summary of Podcast Episode 2" },
			"im:price": {
				label: IMPriceLabel.Get,
				attributes: { amount: "0", currency: Currency.Usd },
			},
			"im:contentType": {
				attributes: {
					term: FluffyLabel.Podcast,
					label: FluffyLabel.Podcast,
				},
			},
			rights: { label: "All rights reserved" },
			title: { label: "Podcast Episode 2 Title" },
			link: {
				attributes: {
					rel: Rel.Alternate,
					type: Type.TextHTML,
					href: "http://episode2.url",
				},
			},
			id: { label: "http://episode2.id", attributes: { "im:id": "2" } },
			"im:artist": {
				label: "Podcast Artist",
				attributes: { href: "http://artist.url" },
			},
			category: {
				attributes: {
					"im:id": "1302",
					term: PurpleLabel.MusicCommentary,
					scheme: "http://scheme.url",
					label: PurpleLabel.MusicCommentary,
				},
			},
			"im:releaseDate": {
				label: new Date("2023-02-01T00:00:00Z"),
				attributes: { label: "February 1, 2023" },
			},
		},
	],
	updated: { label: "2023-05-31T12:00:00Z" },
	rights: { label: "All rights reserved" },
	title: { label: "Podcast Title" },
	icon: { label: "http://icon.url" },
	link: [
		{ attributes: { rel: Rel.Self, href: "http://self.url" } },
		{ attributes: { rel: Rel.Alternate, href: "http://alternate.url" } },
	],
	id: { label: "http://id.url" },
};
