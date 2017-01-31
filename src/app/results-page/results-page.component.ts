import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { SearchService } from '../search.service';

type Service = Object;

@Component({
	selector: "results-page",
	styleUrls: [ "./results-page.css" ],
	templateUrl: "./results-page.html",
	providers: [ SearchService ]
})
export class ResultsPageComponent implements OnInit, OnDestroy {
	private sub: any;

	results: Array<Service>;

	constructor(
		private route: ActivatedRoute,
		private searchService: SearchService
	) {}

	ngOnInit() {
		this.sub = this.route.queryParams.subscribe(params => {
			this.getResults(
				params['latitude'],
				params['longitude'],
				params['serviceCodes'].split(',')
			);
		});
	}

	ngOnDestroy() {
		if (this.sub) {
			this.sub.unsubscribe();
		}
	}

	getResults(latitude: string, longitude: string, serviceCodes: Array<string>) {
		this.searchService.getResults(
			latitude,
			longitude,
			serviceCodes
		)
		.then(results => {
			console.log('Search Results');
			console.log(results);
			this.results = results;
		});
	}
}
