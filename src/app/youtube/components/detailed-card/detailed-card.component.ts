import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SearchDataService } from '../../services/search-data.service';
import { switchMap } from 'rxjs';

@Component({
	selector: 'app-detailed-card',
	templateUrl: './detailed-card.component.html',
	styleUrls: ['./detailed-card.component.scss'],
})
export class DetailedCardComponent implements OnInit {
	publishedAt: string = '';

	title: string = '';

	channelTitle: string = '';

	imgSrc: string = '';

	viewCount: string = '';

	likeCount: string = '';

	commentCount: string = '';

	description: string = '';

	constructor(
		private searchDataService: SearchDataService,
		private activatedRoute: ActivatedRoute,
		private location: Location,
	) {}

	ngOnInit(): void {
		this.activatedRoute.params
			.pipe(switchMap((params) => this.searchDataService.getVideo(params['id'])))
			.subscribe(([result]) => {
				this.publishedAt = result.snippet.publishedAt;
				this.title = result.snippet.title;
				this.channelTitle = result.snippet.channelTitle;
				this.imgSrc = result.snippet.thumbnails.high.url;
				this.viewCount = result.statistics.viewCount;
				this.likeCount = result.statistics.likeCount;
				this.commentCount = result.statistics.commentCount;
				this.description = result.snippet.description;
			});
	}

	goBack(): void {
		this.location.back();
	}
}
