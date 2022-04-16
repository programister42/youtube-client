import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '../../services/search-data.service';
import { StatsItemModel } from '../../../shared/models/search-item.model';
import { ActivatedRoute } from '@angular/router';
import { SortingOrder } from 'src/app/shared/models/sorting-order';
import { switchMap } from 'rxjs';

@Component({
	selector: 'app-search-results',
	templateUrl: './search-results.component.html',
	styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
	isSearching: boolean = false;

	searchResults: StatsItemModel[] | undefined;

	filteringWord: string = '';

	sortingByViews: SortingOrder = SortingOrder.Off;

	sortingByDate: SortingOrder = SortingOrder.Off;

	constructor(
		private searchDataService: SearchDataService,
		private activatedRoute: ActivatedRoute,
	) {}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((params) => {
			this.searchDataService.search(params['value']).subscribe((results) => {
				this.searchResults = results;
			});
		});

		this.activatedRoute.params
			.pipe(switchMap((params) => this.searchDataService.search(params['value'])))
			.subscribe((results) => {
				this.searchResults = results;
			});

		this.searchDataService.filterWord$.subscribe((word) => {
			this.filteringWord = word;
		});

		this.searchDataService.sortingByViews$.subscribe((order) => {
			this.sortingByViews = order;
		});

		this.searchDataService.sortingByDate$.subscribe((order) => {
			this.sortingByDate = order;
		});
	}
}
