import { Component } from '@angular/core';
import { SearchResponseModel } from '../../shared/models/search-response.model';
import { SearchItemModel } from '../../shared/models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  searchResponse!: SearchResponseModel;

  searchResultsList!: SearchItemModel[];
}
