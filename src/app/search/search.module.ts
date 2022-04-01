import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SearchResultsComponent],
  imports: [CommonModule, SharedModule],
  exports: [SearchResultsComponent],
})
export class SearchModule {}
