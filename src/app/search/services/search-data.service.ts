import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchResponseModel } from '../../shared/models/search-response.model';
import { SearchItemModel } from '../../shared/models/search-item.model';
import response from '../response.json';
import { SortingOrder } from '../../shared/models/sorting-order';

enum SortingBy {
	Date,
	Views,
}

@Injectable({
	providedIn: 'root',
})
export class SearchDataService {
	searchResponse$: BehaviorSubject<SearchResponseModel> =
		new BehaviorSubject<SearchResponseModel>(response);

	searchResultsList$: BehaviorSubject<SearchItemModel[]> = new BehaviorSubject<SearchItemModel[]>(
		this.searchResponse$.getValue().items,
	);

	sortingByDate$: BehaviorSubject<SortingOrder> = new BehaviorSubject<SortingOrder>(
		SortingOrder.Off,
	);

	sortingByViews$: BehaviorSubject<SortingOrder> = new BehaviorSubject<SortingOrder>(
		SortingOrder.Off,
	);

	filterWord$: BehaviorSubject<string> = new BehaviorSubject<string>('');

	constructor() {
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
}
