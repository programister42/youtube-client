import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { SearchResponseModel } from '../../shared/models/search-response.model';
import { SearchItemModel } from '../../shared/models/search-item.model';
import { SortingOrder } from '../../shared/models/sorting-order';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class SearchDataService {
	private searchResponse$: BehaviorSubject<SearchResponseModel> =
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
	}

	private static sortByOrder(subject: BehaviorSubject<SortingOrder>): void {
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
			.get<SearchResponseModel>('search', {
				params: {
					type: 'video',
					maxResults: 15,
					q: searchWord,
				},
			})
			.subscribe((response: SearchResponseModel) => {
				this.http
					.get<SearchResponseModel>('videos', {
						params: {
							part: 'snippet,statistics',
							id: response.items.map((item) => item.id.videoId).join(','),
						},
					})
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
		if (this.sortingByViews$.getValue() !== SortingOrder.Off)
			this.sortingByViews$.next(SortingOrder.Off);

		SearchDataService.sortByOrder(this.sortingByDate$);
	}

	sortByViews(): void {
		if (this.sortingByDate$.getValue() !== SortingOrder.Off)
			this.sortingByDate$.next(SortingOrder.Off);

		SearchDataService.sortByOrder(this.sortingByViews$);
	}

	setFilteringWord(word: string): void {
		this.filterWord$.next(word);
	}

	getItemById(id: string): SearchItemModel {
		return this.searchResultsList$.getValue().find((item) => item.id.videoId === id)!;
	}
}
