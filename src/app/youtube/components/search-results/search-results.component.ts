import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '../../services/search-data.service';
import { SearchItemModel } from '../../../shared/models/search-item.model';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-search-results',
	templateUrl: './search-results.component.html',
	styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
	isSearching: boolean = false;

	searchResults!: SearchItemModel[];

	filteringWord: string = '';

	constructor(
		private searchDataService: SearchDataService,
		private activatedRoute: ActivatedRoute,
	) {}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((params) => {
			this.searchDataService.search(params['value']);
		});

		this.searchDataService.searchResultsList$.subscribe((results) => {
			this.searchResults = results;
		});

		this.searchDataService.filterWord$.subscribe((word) => {
			this.filteringWord = word;
		});
	}
}
