import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SearchDataService } from '../../services/search-data.service';
import { StatsItemModel } from '../../../shared/models/search-item.model';

@Component({
	selector: 'app-detailed-card',
	templateUrl: './detailed-card.component.html',
	styleUrls: ['./detailed-card.component.scss'],
})
export class DetailedCardComponent implements OnInit {
	video!: StatsItemModel;

	constructor(
		private searchDataService: SearchDataService,
		private activatedRoute: ActivatedRoute,
		private location: Location,
	) {}

	ngOnInit(): void {
		this.video = this.searchDataService.getItemById(
			this.activatedRoute.snapshot.paramMap.get('id')!,
		);
	}

	goBack(): void {
		this.location.back();
	}
}
