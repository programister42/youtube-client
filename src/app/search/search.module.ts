import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';
import { FilterByWordPipe } from './pipes/filter-by-word.pipe';

@NgModule({
	declarations: [SearchResultsComponent, FilterByWordPipe],
	imports: [CommonModule, SharedModule],
	exports: [SearchResultsComponent],
})
export class SearchModule {}
