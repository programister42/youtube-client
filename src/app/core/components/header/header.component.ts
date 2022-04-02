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

  sortingByViews: SortingOrder = SortingOrder.Off;

  sortingOrder: typeof SortingOrder = SortingOrder;

  constructor(
    private searchMockupService: SearchMockupService,
    private searchDataService: SearchDataService,
  ) {}

  ngOnInit(): void {
    this.searchMockupService.isFiltering.subscribe(
      (isFiltering) => (this.isFiltering = isFiltering),
    );

    this.searchDataService.sortingByDate$.subscribe(
      (sortingByDate) => (this.sortingByDate = sortingByDate),
    );

    this.searchDataService.sortingByViews$.subscribe(
      (sortingByViews) => (this.sortingByViews = sortingByViews),
    );
  }

  onFilterToggle(): void {
    this.searchMockupService.toggleFiltering();
  }

  sortByDate(): void {
    this.searchDataService.sortByDate();
  }

  sortByViews(): void {
    this.searchDataService.sortByViews();
  }
}
