import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';

import { SearchService } from '../search.service';
import { Location } from '../location-picker/location-picker.component';
import { availableServiceCodes } from '../services-multiselect/services-multiselect.component';

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

	private $params: any;
	ngOnInit() {
		this.$params = this.activatedRoute.queryParams.subscribe(params => {
			this.storeValuesFromQueryParams(params);
			this.updateSearchResults({
				latitude: params['latitude'],
				longitude: params['longitude'],
				serviceCodes: this.selectedServiceCodes
			});
		});
	}

	ngOnDestroy() {
		if (this.$params) {
			this.$params.unsubscribe();
		}
	}

	storeValuesFromQueryParams(params) {
		this.location = {
			name: params['locationName'],
			latitude: +params['latitude'],
			longitude: +params['longitude']
		};

		this.selectedServiceCodes =
			params['serviceCodes'] && params['serviceCodes'].split(',') || [];
	}

	updateSearchResults({ latitude, longitude, serviceCodes }) {
		serviceCodes = serviceCodes.length
					? serviceCodes
					: availableServiceCodes.map(({ id }) => id );

		this.searchService
			.getResults( latitude, longitude, serviceCodes )
			.subscribe(results => {
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

	print() {
		window.print();
	}
}
