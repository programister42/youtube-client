import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchMockupService {
  isSearching: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isFiltering: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setSearching(isSearching: boolean) {
    this.isSearching.next(isSearching);
  }

  toggleFiltering() {
    this.isFiltering.next(!this.isFiltering.value);
  }
}
