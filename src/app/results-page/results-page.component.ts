import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

import { IMultiSelectOption } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
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

	availableServiceCodes: IMultiSelectOption[] = [
		{ id: "BH-0500", name: "At Risk/Homeless Housing Related Assistance Programs" },
		{ id: "BM-6500.1500", name: "Clothing" },
		{ id: "BH-1800", name: "Emergency Shelter" },
		{ id: "PN-8100.5000", name: "Mental Health Related Support Groups" },
		{ id: "LN-9500", name: "Women's Health Centers" },
		{ id: "LE-0100", name: "Primary Health Care" },
		{ id: "LT-3000", name: "Hospice Care" },
		{ id: "PN-8100.3000-050", name: "Cancer Support Group" },
		{ id: "LV-1600", name: "Dental Care" },
		{ id: "BD-1800.2000", name: "Food Pantry" }
	];

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
