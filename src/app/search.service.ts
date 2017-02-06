import { Injectable } from '@angular/core';
import { URLSearchParams, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

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

		return this.http.get(this.searchUrl, {
			search: params
		})
		.toPromise()
		.then(response => response.json().organization_list)
		.then(response => response.map((org) => {
			const searchedServices = org.organizationService_list
				.filter((service) => {
					return serviceCodes.indexOf(service.name) >= 0;
				});

			const availableSearchedServices = searchedServices
				.filter((service) => service.isAvailable);

			org.availabilityStatus = availableSearchedServices.length === 0 ?
				'none' :
				(availableSearchedServices.length === searchedServices.length) ? 'all' : 'some';

			return org;
		}))
		.catch(err => console.log(err));
	}

}
