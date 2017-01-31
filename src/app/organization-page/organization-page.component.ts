import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { OrganizationService } from '../organization.service';

@Component({
	selector: "organization-page",
	styleUrls: [ "./organization-page.css" ],
	templateUrl: "./organization-page.html",
	providers: [ OrganizationService ]
})
export class OrganizationPageComponent implements OnInit, OnDestroy {
	private sub: any;

	organization: any;

	constructor(
		private route: ActivatedRoute,
		private organizationService: OrganizationService
	) {}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			const id = params['id'];
			this.getDetails(id);
		});
	}

	ngOnDestroy() {
		if (this.sub) {
			this.sub.unsubscribe();
		}
	}

	getDetails(id: string) {
		console.log('id:', id);
		this.organizationService.getOrganization(id)
		.then(organization => {
			console.log('Organization');
			console.log(organization);
			this.organization = organization;
		});
	}
}
