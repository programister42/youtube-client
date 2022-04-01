import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [SearchResultsComponent],
  imports: [CommonModule],
  exports: [SearchResultsComponent],
})
export class SearchModule {}
