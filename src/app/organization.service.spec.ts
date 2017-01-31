/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { OrganizationService } from './organization.service';

describe('OrganizationService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ OrganizationService ],
			imports: [ HttpModule ]
		});
	});

	it('should ...', inject([OrganizationService], (service: OrganizationService) => {
		expect(service).toBeTruthy();
	}));
});
