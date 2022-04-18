import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchBarService } from '../../services/search-mockup.service';
import { SearchDataService } from '../../../youtube/services/search-data.service';
import { SortingOrder } from '../../../shared/models/sorting-order';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
	isSorting: boolean = false;

	filterWord: string = '';

	sortingByDate: SortingOrder = SortingOrder.Off;

	sortingByViews: SortingOrder = SortingOrder.Off;

	sortingOrder: typeof SortingOrder = SortingOrder;

	isFilteringByWord: boolean = false;

	isLoggedIn: boolean = false;

	userName: string = '';

	isLoggedInSubscription!: Subscription;

	userLoginSubscribtion!: Subscription;

	constructor(
		private searchBarService: SearchBarService,
		private searchDataService: SearchDataService,
		private authService: AuthService,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.searchBarService.isFiltering$.subscribe((isFiltering) => {
			this.isSorting = isFiltering;
		});

		this.searchDataService.sortingByDate$.subscribe((sortingByDate) => {
			this.sortingByDate = sortingByDate;
		});

		this.searchDataService.sortingByViews$.subscribe((sortingByViews) => {
			this.sortingByViews = sortingByViews;
		});

		this.searchDataService.filterWord$.subscribe((filterWord) => {
			this.isFilteringByWord = filterWord !== '';
		});

		this.isLoggedInSubscription = this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
			this.isLoggedIn = isLoggedIn;
		});

		this.userLoginSubscribtion = this.authService.userLogin$.subscribe((userName) => {
			this.userName = userName;
		});
	}

	ngOnDestroy(): void {
		this.searchBarService.isFiltering$.unsubscribe();
		this.searchDataService.sortingByDate$.unsubscribe();
		this.searchDataService.sortingByViews$.unsubscribe();
		this.searchDataService.filterWord$.unsubscribe();
		this.isLoggedInSubscription.unsubscribe();
		this.userLoginSubscribtion.unsubscribe();
	}

	onFilterToggle(): void {
		this.searchBarService.toggleFiltering();
	}

	sortByDate(): void {
		this.searchDataService.sortByDate();
	}

	sortByViews(): void {
		this.searchDataService.sortByViews();
	}

	filterByWord(): void {
		this.searchDataService.setFilteringWord(this.filterWord);
	}

	redirectToLogin(): void {
		if (this.isLoggedIn) this.authService.logout();
		this.router.navigate(['/login']);
	}
}
