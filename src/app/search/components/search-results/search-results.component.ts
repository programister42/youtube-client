import { Component, OnInit } from '@angular/core';
import { SearchMockupService } from '../../../core/services/search-mockup.service';
import { SearchDataService } from '../../services/search-data.service';
import { SearchItemModel } from '../../../shared/models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  isSearching: boolean = false;

  searchResults: SearchItemModel[] | undefined;

  constructor(
    private searchMockupService: SearchMockupService,
    private searchDataService: SearchDataService,
  ) {}

  ngOnInit(): void {
    this.searchMockupService.isSearching.subscribe((isSearching) => {
      this.isSearching = isSearching;
    });

    this.searchDataService.searchResultsList$.subscribe((results) => {
      this.searchResults = results;
    });
  }
}
