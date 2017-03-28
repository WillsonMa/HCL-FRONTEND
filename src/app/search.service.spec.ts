/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ HttpModule ],
			providers: [
				SearchService,
				{ provide: XHRBackend, useClass: MockBackend },
				MockBackend
			]
		});
	}));

	it('should get list of organizations from API',
		async(inject([SearchService, XHRBackend], (searchService, mockBackend) => {
			const mockResponse = new Response(new ResponseOptions({
				body: {
					organization_list: [{
						id: "org0",
						name: "An amazing organization",
						address_list: [{
							addressLine1: "123 Fake St",
							locality: "Springfield",
							region: "Kentucky"
						}],
						organizationService_list: [{
							isAvailable: true,
							service: {
								serviceCode: 'code1'
							}
						}]
					}, {
						id: "org1",
						name: "Waldo Finders",
						address_list: [{
							addressLine1: "1709 Broderick Street",
							locality: "San Francisco",
							region: "California"
						}],
						organizationService_list: [{
							isAvailable: true,
							service: {
								serviceCode: 'code2'
							}
						}]
					}]
				}
			}));

			mockBackend.connections.subscribe(connection => {
				connection.mockRespond(mockResponse);
			});

			searchService.getResults('lat', 'long', [ 'code1', 'code2' ])
				.subscribe(results => {
					expect(results[0]).toEqual({
						id: "org0",
						name: "An amazing organization",
						address_list: [{
							addressLine1: "123 Fake St",
							locality: "Springfield",
							region: "Kentucky"
						}],
						organizationService_list: [{
							isAvailable: true,
							service: {
								serviceCode: "code1"
							}
						}],
						availabilityStatus: "all",
						displayAddress: "123 Fake St Springfield, Kentucky"
					});

					expect(results[1]).toEqual({
						id: "org1",
						name: "Waldo Finders",
						address_list: [{
							addressLine1: "1709 Broderick Street",
							locality: "San Francisco",
							region: "California"
						}],
						organizationService_list: [{
							isAvailable: true,
							service: {
								serviceCode: "code2"
							}
						}],
						availabilityStatus: "all",
						displayAddress: "1709 Broderick Street San Francisco, California"
					});
				});
		}))
	);

	it('should return an empty list when API returns "No services found."',
		async(inject([SearchService, XHRBackend], (searchService, mockBackend) => {
			const mockResponse = new Response(new ResponseOptions({
				body: {
					message: 'No services found.'
				}
			}));

			mockBackend.connections.subscribe(connection => {
				connection.mockRespond(mockResponse);
			});

			searchService.getResults('lat', 'long', [ 'code1', 'code2' ])
				.subscribe(results => {
					expect(results).toEqual([]);
				});
		}))
	);
});
