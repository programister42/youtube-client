import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class SearchMockupService {
	searchValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');

	isFiltering$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	constructor(private router: Router) {}

	search(searchValue: string): void {
		this.searchValue$.next(searchValue);
		this.router.navigate(['youtube/search/' + searchValue]);
	}

	toggleFiltering(): void {
		this.isFiltering$.next(!this.isFiltering$.value);
	}
}
