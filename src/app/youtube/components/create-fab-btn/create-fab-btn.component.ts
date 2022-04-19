import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-create-fab-btn',
	templateUrl: './create-fab-btn.component.html',
	styleUrls: ['./create-fab-btn.component.scss'],
})
export class CreateFabBtnComponent {
	constructor(private router: Router) {}

	onClick(): void {
		this.router.navigate(['/youtube/admin']);
	}
}
