import { SearchItemModel, StatsItemModel } from './search-item.model';

export interface SearchResponseModel {
	kind: string;
	etag: string;
	nextPageToken: string;
	regionCode: string;
	pageInfo: {
		totalResults: number;
		resultsPerPage: number;
	};
	items: SearchItemModel[];
}

export interface StatsResponseModel {
	etag: string;
	items: StatsItemModel[];
	kind: string;
	pageInfo: {
		totalResults: number;
		resultsPerPage: number;
	};
}
