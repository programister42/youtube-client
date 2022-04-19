import { Component, ViewChild } from '@angular/core';
import { CreateCardFormComponent } from '../create-card-form/create-card-form.component';

@Component({
	selector: 'app-create-card',
	templateUrl: './create-card.component.html',
	styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent {
	@ViewChild(CreateCardFormComponent) child!: CreateCardFormComponent;
}
