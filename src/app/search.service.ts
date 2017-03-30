import { Injectable } from '@angular/core';
import { URLSearchParams, Http } from '@angular/http';

import { getAvailabilityStatus } from './utils';
import Observable from './observable';
import * as _ from 'lodash';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchService {
	private searchUrl: string = "http://hclapi-dev.us-east-2.elasticbeanstalk.com/search";

	constructor(private http: Http) { }

	getResults(latitude: string, longitude: string, serviceCodes: Array<string>) {
		const params = new URLSearchParams();

		serviceCodes.forEach(serviceCode => {
			params.append('serviceCode', serviceCode);
		});

		params.append('latitude', latitude);
		params.append('longitude', longitude);

		return this.http
			.get(this.searchUrl, { search: params})
			.map(response => response.json())
			.map(response => response.organization_list)
			.map(response =>
				response
					.map(org => {
						const address = org.address_list[0];

						return _.assign(org, {
							availabilityStatus: getAvailabilityStatus(org.organizationService_list, serviceCodes),
							displayAddress: `${address.addressLine1} ${address.locality}, ${address.region}`
						});
					})
			)
			.catch(err => {
				console.log(`err: ${err}`);
				return Observable.of([]);
			});
	}
}
