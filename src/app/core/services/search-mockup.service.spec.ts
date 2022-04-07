import { TestBed } from '@angular/core/testing';

import { SearchMockupService } from './search-mockup.service';

describe('SearchMockupService', () => {
	let service: SearchMockupService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(SearchMockupService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
