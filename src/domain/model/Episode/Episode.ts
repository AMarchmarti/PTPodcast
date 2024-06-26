export interface EpisodeResponse {
	resultCount: number;
	results: Episode[];
}

export interface Episode {
	wrapperType: string;
	kind: string;
	artistId: number;
	description: string;
	previewUrl: string;
	collectionId: number;
	trackId: number;
	artistName: string;
	collectionName: string;
	trackName: string;
	collectionCensoredName: string;
	trackCensoredName: string;
	artistViewUrl: string;
	collectionViewUrl: string;
	feedUrl: string;
	trackViewUrl: string;
	artworkUrl30: string;
	artworkUrl60: string;
	artworkUrl100: string;
	collectionPrice: number;
	trackPrice: number;
	collectionHdPrice: number;
	releaseDate: Date;
	collectionExplicitness: string;
	trackExplicitness: string;
	trackCount: number;
	trackTimeMillis: number;
	country: string;
	currency: string;
	primaryGenreName: string;
	artworkUrl600: string;
	genreIds: string[];
	genres: string[];
}
