import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { IMultiSelectOption } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

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

	private mapZoomLevel: number = 10;
	private serviceCodesParam: Array<string>;

	private selectedServiceCodes: number[];

	private availableServiceCodes: IMultiSelectOption[] = [
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

	constructor(
		private route: ActivatedRoute,
		private searchService: SearchService
	) {}

	ngOnInit() {
		this.sub = this.route.queryParams.subscribe(params => {
			this.serviceCodesParam = params['serviceCodes'].split(',');
			this.getResults(
				params['latitude'],
				params['longitude'],
				this.serviceCodesParam
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
