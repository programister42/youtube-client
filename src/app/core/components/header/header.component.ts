import { Component, OnInit } from '@angular/core';
import { SearchMockupService } from '../../services/search-mockup.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isFiltering: boolean = false;

  filteringValue: string = '';

  constructor(private searchService: SearchMockupService) {}

  ngOnInit() {
    this.searchService.isFiltering.subscribe((isFiltering) => (this.isFiltering = isFiltering));
  }

  onFilterToggle() {
    this.searchService.toggleFiltering();
  }
}
