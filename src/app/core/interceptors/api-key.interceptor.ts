import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		// const key: string = 'AIzaSyBxf75tVokHfZl0fOd8OliwF114E535uB8';
		const key: string = 'AIzaSyCGWWUAY7Jp-6Z71og9fZp90vg-s6Q1S2A';
		return next.handle(
			request.clone({
				params: request.params.set('key', key),
			}),
		);
	}
}
