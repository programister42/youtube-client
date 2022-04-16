import { Component, Input } from '@angular/core';
import { StatsItemModel } from '../../models/search-item.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent {
	@Input() video: StatsItemModel = {} as StatsItemModel;

	constructor(private router: Router) {}

	showInfo() {
		this.router.navigate(['/youtube/video', this.video.id]);
	}
}
