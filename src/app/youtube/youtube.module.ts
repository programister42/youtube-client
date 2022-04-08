import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';
import { FilterByWordPipe } from './pipes/filter-by-word.pipe';
import { RouterModule, Routes } from '@angular/router';
import { RecommendationsPageComponent } from './pages/recommendations-page/recommendations-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
	{ path: '', component: RecommendationsPageComponent },
	{ path: 'search/:value', component: SearchPageComponent },
];

@NgModule({
	declarations: [
		SearchResultsComponent,
		FilterByWordPipe,
		RecommendationsPageComponent,
		SearchPageComponent,
	],
	imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class YoutubeModule {}
