import { Component, OnInit } from '@angular/core';
import { SearchResponseModel } from '../../../shared/models/search-response.model';
import { SearchItemModel } from '../../../shared/models/search-item.model';
import * as response from '../../response.json';
import { SearchMockupService } from '../../../core/services/search-mockup.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  isSearching: boolean = false;

  searchResponse: SearchResponseModel = response;

  searchResultsList: SearchItemModel[] = this.searchResponse.items;

  constructor(private searchService: SearchMockupService) {}

  ngOnInit() {
    this.searchService.isSearching.subscribe((isSearching) => {
      this.isSearching = isSearching;
    });
  }
}
