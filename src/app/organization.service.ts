import { Injectable } from '@angular/core';
import { URLSearchParams, Http } from '@angular/http';

import { getAvailabilityStatus } from './utils';
import * as _ from 'lodash';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrganizationService {
	private searchUrl: string = "http://hclapi-dev.us-east-2.elasticbeanstalk.com/organization";

	constructor(private http: Http) { }

	getOrganization(id: string) {
		return this.http.get(`${this.searchUrl}/${id}`)
		.toPromise()
		.then(response => response.json())
		.catch(err => console.log(err));
	}

}
