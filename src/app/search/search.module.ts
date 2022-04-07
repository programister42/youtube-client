import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';
import { FilterByWordPipe } from './pipes/filter-by-word.pipe';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SearchResultsComponent }];

@NgModule({
	declarations: [SearchResultsComponent, FilterByWordPipe],
	imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
	exports: [],
})
export class SearchModule {}
