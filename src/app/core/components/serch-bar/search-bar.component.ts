import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, Observable } from 'rxjs';
import { SearchMockupService } from '../../services/search-mockup.service';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
	searchForm: FormGroup = new FormGroup({
		searchInput: new FormControl(''),
	});

	searchStream$: Observable<string> = this.searchForm.valueChanges.pipe(
		map((value) => value.searchInput),
		filter((value) => value.length > 2),
		debounceTime(500),
		distinctUntilChanged(),
	);

	constructor(private searchService: SearchMockupService) {
		this.searchStream$.subscribe((value) => {
			console.log(value);
		});
	}

	ngOnInit(): void {
		this.searchStream$.subscribe((value) => {
			this.searchService.search(value);
		});
	}

	onSubmit(e: Event): void {
		e.preventDefault();
		this.searchService.search(this.searchForm.value.searchInput);
	}
}
