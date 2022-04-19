import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
	constructor(private authService: AuthService, private router: Router) {}

	canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (!this.authService.checkLogin()) {
			this.router.navigate(['/login']);
		}
		return this.authService.checkLogin();
	}

	canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.canActivate();
	}
}
