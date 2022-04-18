import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dateBeforeCurrentValidator } from 'src/app/shared/validators/dateBeforeCurrentValidator';

@Component({
	selector: 'app-create-card-form',
	templateUrl: './create-card-form.component.html',
	styleUrls: ['./create-card-form.component.scss'],
})
export class CreateCardFormComponent implements OnInit {
	hidePassword: boolean = false;

	newCardForm!: FormGroup;

	maxDate: Date = new Date();

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.newCardForm = this.formBuilder.group({
			title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
			description: ['', [Validators.maxLength(255)]],
			imageUrl: [
				'',
				[
					Validators.required,
					Validators.pattern(/^(http(s?):\/\/).+\.(jpg|jpeg|png|gif)$/),
				],
			],
			videoUrl: ['', [Validators.required, Validators.pattern(/^(http(s?):\/\/).+\.(mp4)$/)]],
			creationDate: ['', [Validators.required, dateBeforeCurrentValidator()]],
		});

		this.newCardForm.hasError('dateBeforeCurrent', ['creationDate']);
	}
}
