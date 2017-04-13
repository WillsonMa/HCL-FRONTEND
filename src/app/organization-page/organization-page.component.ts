import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { getAvailabilityStatus } from '../utils';
import * as _ from 'lodash';

import { OrganizationService } from '../organization.service';

@Component({
	selector: "organization-page",
	styleUrls: [ "./organization-page.css" ],
	templateUrl: "./organization-page.html",
	providers: [ OrganizationService ]
})
export class OrganizationPageComponent implements OnInit, OnDestroy {
	private paramsSub: any;
	private queryParamsSub: any;

	private serviceCodes: Array<String>;

	organization: any;

	constructor(
		private route: ActivatedRoute,
		private organizationService: OrganizationService,
		private location: Location
	) {}

	ngOnInit() {
		this.paramsSub = this.route.params.subscribe(params => {
			const id = params['id'];
			this.getDetails(id);
		});

		this.queryParamsSub = this.route.queryParams.subscribe(params => {
			this.serviceCodes = params['serviceCodes'].split(',');
		});
	}

	ngOnDestroy() {
		if (this.paramsSub) {
			this.paramsSub.unsubscribe();
		}
		if (this.queryParamsSub) {
			this.queryParamsSub.unsubscribe();
		}
	}

	getDetails(id: string) {
		console.log('id:', id);
		this.organizationService.getOrganization(id)
		.then(organization => _.assign(organization, {
			availabilityStatus: getAvailabilityStatus(organization.organizationService_list, this.serviceCodes)
		}))
		.then(organization => {
			console.log('Organization');
			console.log(organization);
			this.organization = organization;
		});
	}

	navigateBack() {
		this.location.back();
	}
}
