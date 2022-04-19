import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserDataModel } from '../models/user-data.model';

@Component({
	selector: 'app-auth-form',
	templateUrl: './auth-form.component.html',
	styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
	hidePassword: boolean = true;

	authForm: FormGroup = new FormGroup({
		login: new FormControl('', Validators.required),
		password: new FormControl('', Validators.required),
	});

	constructor(private authService: AuthService) {}

	onSubmit() {
		this.authService.login(this.authForm.value as UserDataModel);
	}
}
