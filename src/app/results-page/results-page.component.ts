import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';

import { SearchService } from '../search.service';
import { Location } from '../location-picker/location-picker.component';

type Service = Object;

@Component({
	selector: "results-page",
	styleUrls: [ "./results-page.css" ],
	templateUrl: "./results-page.html",
	providers: [ SearchService ]
})
export class ResultsPageComponent implements OnInit, OnDestroy {
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private searchService: SearchService
	) {}

	results: Array<Service>;

	location: Location;
	mapZoomLevel: number = 10;
	selectedServiceCodes: Array<string>;

	private sub: any;
	ngOnInit() {
		this.sub = this.activatedRoute.queryParams.subscribe(params => {
			this.location = {
				name: params['locationName'],
				latitude: +params['latitude'],
				longitude: +params['longitude']
			};
			this.selectedServiceCodes = params['serviceCodes'].split(',');
			this.updateResults(
				params['latitude'],
				params['longitude'],
				this.selectedServiceCodes
			);
		});
	}

	ngOnDestroy() {
		if (this.sub) {
			this.sub.unsubscribe();
		}
	}

	private updateResults(latitude: string, longitude: string, serviceCodes: Array<string>) {
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

	updateQueryParams(newParams) {
		const curParams = this.activatedRoute.snapshot.queryParams;

		this.router.navigate([], {
			queryParams: _.assign({}, curParams, newParams),
			relativeTo: this.activatedRoute
		});
	}
}
