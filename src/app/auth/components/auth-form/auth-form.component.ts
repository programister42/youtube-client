import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataModel } from '../models/user-data.model';

@Component({
	selector: 'app-auth-form',
	templateUrl: './auth-form.component.html',
	styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
	@Output() login: EventEmitter<UserDataModel> = new EventEmitter<UserDataModel>();

	hidePassword: boolean = true;

	authForm: FormGroup = new FormGroup({
		login: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', Validators.required),
	});

	onSubmit() {
		this.login.emit(this.authForm.value as UserDataModel);
	}
}
