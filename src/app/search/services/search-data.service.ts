import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchResponseModel } from '../../shared/models/search-response.model';
import { SearchItemModel } from '../../shared/models/search-item.model';
import response from '../response.json';
import { SortingOrder } from '../../shared/models/sorting-order';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  searchResponse$: BehaviorSubject<SearchResponseModel> = new BehaviorSubject<SearchResponseModel>(
    response,
  );

  searchResultsList$: BehaviorSubject<SearchItemModel[]> = new BehaviorSubject<SearchItemModel[]>(
    this.searchResponse$.getValue().items,
  );

  sortingByDate$: BehaviorSubject<SortingOrder> = new BehaviorSubject<SortingOrder>(
    SortingOrder.Off,
  );

  sortingByViews$: BehaviorSubject<SortingOrder> = new BehaviorSubject<SortingOrder>(
    SortingOrder.Off,
  );

  constructor() {
    this.sortingByDate$.subscribe((value) => {
      switch (value) {
        case SortingOrder.Ascending:
          this.searchResultsList$.next(
            [...this.searchResultsList$.getValue()].sort(
              (a, b) =>
                Number(new Date(b.snippet.publishedAt)) - Number(new Date(a.snippet.publishedAt)),
            ),
          );
          break;
        case SortingOrder.Descending:
          this.searchResultsList$.next(
            [...this.searchResultsList$.getValue()].sort(
              (a, b) =>
                Number(new Date(a.snippet.publishedAt)) - Number(new Date(b.snippet.publishedAt)),
            ),
          );
          break;
        default:
          this.searchResultsList$.next([...this.searchResponse$.getValue().items]);
          break;
      }
    });

    this.sortingByViews$.subscribe((value) => {
      switch (value) {
        case SortingOrder.Ascending:
          this.searchResultsList$.next(
            [...this.searchResultsList$.getValue()].sort(
              (a, b) =>
                Number(new Date(b.statistics.viewCount)) - Number(new Date(a.statistics.viewCount)),
            ),
          );
          break;
        case SortingOrder.Descending:
          this.searchResultsList$.next(
            [...this.searchResultsList$.getValue()].sort(
              (a, b) =>
                Number(new Date(a.statistics.viewCount)) - Number(new Date(b.statistics.viewCount)),
            ),
          );
          break;
        default:
          this.searchResultsList$.next([...this.searchResponse$.getValue().items]);
          break;
      }
    });
  }

  sortByDate() {
    this.sort(this.sortingByDate$);
  }

  sortByViews() {
    this.sort(this.sortingByViews$);
  }

  sort(subject: BehaviorSubject<SortingOrder>) {
    switch (subject.getValue()) {
      case SortingOrder.Ascending:
        subject.next(SortingOrder.Descending);
        break;
      case SortingOrder.Descending:
        subject.next(SortingOrder.Off);
        break;
      default:
        subject.next(SortingOrder.Ascending);
        break;
    }
  }
}
