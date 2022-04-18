import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, Observable, Subscription } from 'rxjs';
import { SearchBarService } from '../../services/search-mockup.service';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
	searchForm: FormGroup = new FormGroup({
		searchInput: new FormControl(''),
	});

	searchStream$: Observable<string> = this.searchForm.valueChanges.pipe(
		map((value) => value.searchInput),
		filter((value) => value.length > 2),
		debounceTime(500),
		distinctUntilChanged(),
	);

	searchStreamSubscription!: Subscription;

	constructor(private searchService: SearchBarService) {}

	ngOnInit(): void {
		this.searchStreamSubscription = this.searchStream$.subscribe((value) => {
			this.searchService.search(value);
		});
	}

	ngOnDestroy(): void {
		this.searchStreamSubscription.unsubscribe();
	}

	onSubmit(e: Event): void {
		e.preventDefault();
		this.searchService.search(this.searchForm.value.searchInput);
	}
}
