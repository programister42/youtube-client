import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { SearchResponseModel } from '../../shared/models/search-response.model';
import { SearchItemModel } from '../../shared/models/search-item.model';
import { SortingOrder } from '../../shared/models/sorting-order';
import { HttpClient } from '@angular/common/http';

enum SortingBy {
	Date,
	Views,
}

@Injectable({
	providedIn: 'root',
})
export class SearchDataService {
	searchResponse$: BehaviorSubject<SearchResponseModel> =
		new BehaviorSubject<SearchResponseModel>({} as SearchResponseModel);

	searchResultsList$: BehaviorSubject<SearchItemModel[]> = new BehaviorSubject<SearchItemModel[]>(
		{} as SearchItemModel[],
	);

	sortingByDate$: BehaviorSubject<SortingOrder> = new BehaviorSubject<SortingOrder>(
		SortingOrder.Off,
	);

	sortingByViews$: BehaviorSubject<SortingOrder> = new BehaviorSubject<SortingOrder>(
		SortingOrder.Off,
	);

	filterWord$: BehaviorSubject<string> = new BehaviorSubject<string>('');

	constructor(private http: HttpClient) {
		this.searchResponse$.subscribe((res) => {
			this.searchResultsList$.next(res.items);
		});

		this.sortingByDate$.subscribe((value) => {
			this.sortingCallback(value, SortingBy.Date);
		});

		this.sortingByViews$.subscribe((value) => {
			this.sortingCallback(value, SortingBy.Views);
		});
	}

	private static sort(subject: BehaviorSubject<SortingOrder>): void {
		switch (subject.getValue()) {
			case SortingOrder.Descending:
				subject.next(SortingOrder.Ascending);
				break;
			case SortingOrder.Ascending:
				subject.next(SortingOrder.Off);
				break;
			default:
				subject.next(SortingOrder.Descending);
				break;
		}
	}

	search(searchWord: string): void {
		this.http
			.get<SearchResponseModel>(
				'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBxf75tVokHfZl0fOd8OliwF114E535uB8',
				{
					params: {
						type: 'video',
						maxResults: 15,
						q: searchWord,
					},
				},
			)
			.subscribe((response: SearchResponseModel) => {
				this.http
					.get<SearchResponseModel>(
						'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBxf75tVokHfZl0fOd8OliwF114E535uB8',
						{
							params: {
								part: 'snippet,statistics',
								id: response.items.map((item) => item.id.videoId).join(','),
							},
						},
					)
					.pipe(
						map((res) => {
							res.items.forEach((item, index) => {
								Object.assign(item, response.items[index]);
							});
							return res;
						}),
					)
					.subscribe((responesWithStats) => {
						this.searchResponse$.next(responesWithStats);
					});
			});
	}

	sortByDate(): void {
		if (this.sortingByViews$.getValue() !== SortingOrder.Off) {
			this.sortingByViews$.next(SortingOrder.Off);
		}

		SearchDataService.sort(this.sortingByDate$);
	}

	sortByViews(): void {
		if (this.sortingByDate$.getValue() !== SortingOrder.Off) {
			this.sortingByDate$.next(SortingOrder.Off);
		}

		SearchDataService.sort(this.sortingByViews$);
	}

	setFilteringWord(word: string): void {
		this.filterWord$.next(word);
	}

	getItemById(id: string): SearchItemModel {
		return this.searchResultsList$.getValue().find((item) => item.id.videoId === id)!;
	}

	private sortingCallback(value: SortingOrder, sortingBy: SortingBy): void {
		switch (value) {
			case SortingOrder.Ascending:
				this.searchResultsList$.next(
					[...this.searchResultsList$.getValue()].sort((a, b) => {
						const first: number =
							sortingBy === SortingBy.Date
								? Number(new Date(a.snippet.publishedAt))
								: Number(a.statistics.viewCount);
						const second =
							sortingBy === SortingBy.Date
								? Number(new Date(b.snippet.publishedAt))
								: Number(b.statistics.viewCount);
						return first - second;
					}),
				);
				break;
			case SortingOrder.Descending:
				this.searchResultsList$.next(
					[...this.searchResultsList$.getValue()].sort((a, b) => {
						const first: number =
							sortingBy === SortingBy.Date
								? Number(new Date(a.snippet.publishedAt))
								: Number(a.statistics.viewCount);
						const second =
							sortingBy === SortingBy.Date
								? Number(new Date(b.snippet.publishedAt))
								: Number(b.statistics.viewCount);
						return second - first;
					}),
				);
				break;
			default:
				this.searchResultsList$.next([...this.searchResponse$.getValue().items]);
				break;
		}
	}
}
