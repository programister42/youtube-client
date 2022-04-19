import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';
import { FilterByWordPipe } from './pipes/filter-by-word.pipe';
import { RouterModule, Routes } from '@angular/router';
import { RecommendationsPageComponent } from './pages/recommendations-page/recommendations-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';
import { DetailedCardComponent } from './components/detailed-card/detailed-card.component';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SortByViewsPipe } from './pipes/sort-by-views.pipe';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { CreateCardFormComponent } from './components/create-card-form/create-card-form.component';
import { CreateFabBtnComponent } from './components/create-fab-btn/create-fab-btn.component';

const routes: Routes = [
	{ path: '', component: RecommendationsPageComponent },
	{ path: 'search/:value', component: SearchPageComponent },
	{ path: 'video/:id', component: DetailedInformationPageComponent },
	{ path: 'admin', component: AdminPageComponent },
];

@NgModule({
	declarations: [
		SearchResultsComponent,
		FilterByWordPipe,
		RecommendationsPageComponent,
		SearchPageComponent,
		DetailedInformationPageComponent,
		DetailedCardComponent,
		SortByDatePipe,
		SortByViewsPipe,
		AdminPageComponent,
		CreateCardComponent,
		CreateCardFormComponent,
		CreateFabBtnComponent,
	],
	imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class YoutubeModule {}
