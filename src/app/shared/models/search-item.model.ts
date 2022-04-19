interface Id {
	kind: string;
	videoId: string;
}

interface ThumbnailsData {
	url: string;
	width: 120 | 420 | 480;
	height: 90 | 180 | 360;
}

interface Thumbnails {
	default: ThumbnailsData;
	medium: ThumbnailsData;
	high: ThumbnailsData;
}

interface Localized {
	title: string;
	description: string;
}

interface Snippet {
	publishedAt: string;
	channelId: string;
	title: string;
	description: string;
	thumbnails: Thumbnails;
	channelTitle: string;
	tags: string[];
	categoryId: string;
	liveBroadcastContent: string;
	localized: Localized;
}

interface Statistics {
	viewCount: string;
	likeCount: string;
	favoriteCount: string;
	commentCount: string;
}

export interface SearchItemModel {
	kind: string;
	etag: string;
	id: Id;
}

export interface StatsItemModel {
	etag: string;
	id: string;
	kind: string;
	snippet: Snippet;
	statistics: Statistics;
}
