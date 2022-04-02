import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchMockupService {
  isSearching: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isFiltering: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setSearching(isSearching: boolean): void {
    this.isSearching.next(isSearching);
  }

  toggleFiltering(): void {
    this.isFiltering.next(!this.isFiltering.value);
  }
}
