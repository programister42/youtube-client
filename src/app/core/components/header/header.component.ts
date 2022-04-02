import { Component, OnInit } from '@angular/core';
import { SearchMockupService } from '../../services/search-mockup.service';
import { SearchDataService } from '../../../search/services/search-data.service';
import { SortingOrder } from '../../../shared/models/sorting-order';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isFiltering: boolean = false;

  filteringValue: string = '';

  sortingByDate: SortingOrder = SortingOrder.Off;

  sortingOrder: typeof SortingOrder = SortingOrder;

  constructor(
    private searchMockupService: SearchMockupService,
    private searchDataService: SearchDataService,
  ) {}

  ngOnInit() {
    this.searchMockupService.isFiltering.subscribe(
      (isFiltering) => (this.isFiltering = isFiltering),
    );

    this.searchDataService.sortingByDate$.subscribe(
      (sortingByDate) => (this.sortingByDate = sortingByDate),
    );
  }

  onFilterToggle() {
    this.searchMockupService.toggleFiltering();
  }

  sortByDate() {
    this.searchDataService.sortByDate();
  }
}
