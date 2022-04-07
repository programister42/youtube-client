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
	isSorting: boolean = false;

	filterWord: string = '';

	sortingByDate: SortingOrder = SortingOrder.Off;

	sortingByViews: SortingOrder = SortingOrder.Off;

	sortingOrder: typeof SortingOrder = SortingOrder;

	isFilteringByWord: boolean = false;

	constructor(
		private searchMockupService: SearchMockupService,
		private searchDataService: SearchDataService,
	) {}

	ngOnInit(): void {
		this.searchMockupService.isFiltering.subscribe(
			(isFiltering) => (this.isSorting = isFiltering),
		);

		this.searchDataService.sortingByDate$.subscribe(
			(sortingByDate) => (this.sortingByDate = sortingByDate),
		);

		this.searchDataService.sortingByViews$.subscribe(
			(sortingByViews) => (this.sortingByViews = sortingByViews),
		);

		this.searchDataService.filterWord$.subscribe(
			(filterWord) => (this.isFilteringByWord = filterWord !== ''),
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

	filterByWord(): void {
		this.searchDataService.setFilteringWord(this.filterWord);
	}
}
