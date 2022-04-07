import { Injectable } from '@angular/core';
import { UserDataModel } from '../components/models/user-data.model';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	userData: BehaviorSubject<UserDataModel> = new BehaviorSubject<UserDataModel>(
		{} as UserDataModel,
	);

	userLogin: Observable<string> = this.userData.pipe(map((user: UserDataModel) => user.login));

	isLoggedIn: Observable<boolean> = this.userData.pipe(
		map((user: UserDataModel) => !!user.login),
	);

	constructor() {
		if (localStorage.getItem('userData')) {
			this.userData.next(
				JSON.parse(localStorage.getItem('userData') as string) as UserDataModel,
			);
		}
	}

	login(authValue: UserDataModel): void {
		localStorage.setItem('token', JSON.stringify(authValue));
		this.userData.next(authValue);
		alert('You are logged in');
	}

	logout(): void {
		localStorage.removeItem('token');
		this.userData.next({} as UserDataModel);
		alert('You are logged out');
	}
}
