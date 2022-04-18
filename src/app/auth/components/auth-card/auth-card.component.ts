import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserDataModel } from '../models/user-data.model';

@Component({
	selector: 'app-auth-card',
	templateUrl: './auth-card.component.html',
	styleUrls: ['./auth-card.component.scss'],
})
export class AuthCardComponent {
	constructor(private authService: AuthService) {}

	login(value: UserDataModel) {
		this.authService.login(value);
	}
}
