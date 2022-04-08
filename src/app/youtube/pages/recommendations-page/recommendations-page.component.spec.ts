import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationsPageComponent } from './recommendations-page.component';

describe('MainPageComponent', () => {
	let component: RecommendationsPageComponent;
	let fixture: ComponentFixture<RecommendationsPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RecommendationsPageComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RecommendationsPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
