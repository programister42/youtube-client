import { Injectable } from '@angular/core';
import { UserDataModel } from '../components/models/user-data.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	userData$: BehaviorSubject<UserDataModel> = new BehaviorSubject<UserDataModel>(
		{} as UserDataModel,
	);

	userLogin$: Observable<string> = this.userData$.pipe(map((user: UserDataModel) => user.login));

	isLoggedIn$: Observable<boolean> = this.userLogin$.pipe(map((login) => !!login));

	constructor(private router: Router) {
		if (localStorage.getItem('token')) {
			this.userData$.next(
				JSON.parse(localStorage.getItem('token') as string) as UserDataModel,
			);
		}
	}

	login(authValue: UserDataModel): void {
		localStorage.setItem('token', JSON.stringify(authValue));
		this.userData$.next(authValue);
		this.router.navigate(['/youtube']);
	}

	logout(): void {
		localStorage.removeItem('token');
		this.userData$.next({} as UserDataModel);
	}

	checkLogin(): boolean {
		return !!this.userData$.getValue().login;
	}
}
