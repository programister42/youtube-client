import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFabBtnComponent } from './create-fab-btn.component';

describe('CreateFabBtnComponent', () => {
	let component: CreateFabBtnComponent;
	let fixture: ComponentFixture<CreateFabBtnComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CreateFabBtnComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CreateFabBtnComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
