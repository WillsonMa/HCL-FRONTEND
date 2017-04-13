import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AgmCoreModule as GoogleMapsModule } from 'angular2-google-maps/core';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

import Observable from '../observable';
import { LocationPickerComponent } from "../location-picker/location-picker.component";
import { ResultsPageComponent } from "./results-page.component";
import { ServicesMultiselectComponent, availableServiceCodes } from '../services-multiselect/services-multiselect.component';
import { SearchService } from '../search.service';

describe("ResultsPageComponent", () => {
	let de: DebugElement;
	let comp: ResultsPageComponent;
	let fixture: ComponentFixture<ResultsPageComponent>;
	let queryParams: Object = {
		locationName: 'Madison',
		latitude: '43.073',
		longitude: '89.401',
		serviceCodes: 'BM-6500.1500,BH-1800'
	};
	let $queryParams: Observable<Object> = Observable.of(queryParams);
	let $searchServiceResults = Observable.of([ 'Mock', 'Results' ]);
	let router = {
		navigate: jasmine.createSpy('navigate')
	};

	beforeEach(async(() => {
		TestBed
		.configureTestingModule({
			declarations: [
				ResultsPageComponent,
				LocationPickerComponent,
				ServicesMultiselectComponent
			],
			imports: [
				RouterTestingModule,
				MultiselectDropdownModule,
				FormsModule,
				HttpModule,
				GoogleMapsModule.forRoot({
					apiKey: "AIzaSyDnyjd_w7FdScc5fU1pc1DwncZOAXgeZMI",
					libraries: ['places']
				})
			],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						queryParams: $queryParams,
						snapshot: {
							queryParams: $queryParams
						}
					}
				},
				SearchService,
				{ provide: Router, useValue: router }
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ResultsPageComponent);
		comp = fixture.componentInstance;
		de = fixture.debugElement.query(By.css("h1"));
	});

	it("should create component", () => expect(comp).toBeDefined() );

	it("should store values from queryParams", () => {
		spyOn(comp, 'storeValuesFromQueryParams')
			.and.callThrough();
		comp.ngOnInit();

		expect(comp.storeValuesFromQueryParams).toHaveBeenCalledWith(queryParams);
	});

	it("should get results from search service", () => {
		spyOn(comp, 'updateSearchResults').and.callFake(() => Promise.resolve({}));
		comp.ngOnInit();

		expect(comp.updateSearchResults).toHaveBeenCalledWith({
			latitude: '43.073',
			longitude: '89.401',
			serviceCodes: [ 'BM-6500.1500', 'BH-1800' ]
		});
	});

	it("should update results when queryParams change", () => {
		const activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
		comp.ngOnInit();

		activatedRoute.queryParams = Observable.of({
			locationName: 'Madison',
			latitude: '82.8628',
			longitude: '135.0000',
			serviceCodes: 'ABC.123,XYZ.456'
		});
		spyOn(comp, 'updateSearchResults').and.callFake(() => Promise.resolve({}));
		fixture.detectChanges();

		expect(comp.updateSearchResults).toHaveBeenCalledWith({
			latitude: '82.8628',
			longitude: '135.0000',
			serviceCodes: [ 'ABC.123', 'XYZ.456' ]
		});
	});

	describe("storeValuesFromQueryParams()", () => {
		it("should correctly store location", () => {
			comp.storeValuesFromQueryParams({
				locationName: 'Madison',
				latitude: '43.073',
				longitude: '89.401'
			});

			expect(comp.location).toEqual({
				name: 'Madison',
				latitude: 43.073,
				longitude: 89.401
			});
		});

		it("should correctly store selectedServiceCodes", () => {
			comp.storeValuesFromQueryParams({
				serviceCodes: 'ABC.123,XYZ.456'
			});

			expect(comp.selectedServiceCodes)
				.toEqual([ 'ABC.123', 'XYZ.456' ]);
		});

		it("should set selectedServiceCodes to empty array if serviceCodes is empty", () => {
			comp.storeValuesFromQueryParams({
				serviceCodes: ''
			});

			expect(comp.selectedServiceCodes).toEqual([]);
		});
	});

	describe("updateSearchResults", () => {
		let getResultsSpy;

		beforeEach(() => {
			let searchService: SearchService = fixture.debugElement.injector.get(SearchService);

			getResultsSpy = spyOn(searchService, 'getResults')
				.and.returnValue($searchServiceResults);
		});

		it("works", () => {
			comp.updateSearchResults({
				latitude: '82.8628',
				longitude: '135.0000',
				serviceCodes: [ 'ABC.123', 'XYZ.456' ]
			})

			expect(getResultsSpy).toHaveBeenCalledWith(
				'82.8628',
				'135.0000',
				[ 'ABC.123', 'XYZ.456' ]
			);
		});

		it("passes all available services is serviceCodes is empty (#73)", () => {
			comp.updateSearchResults({
				latitude: '82.8628',
				longitude: '135.0000',
				serviceCodes: [ ]
			})

			expect(getResultsSpy).toHaveBeenCalledWith(
				'82.8628',
				'135.0000',
				availableServiceCodes.map(({ id }) => id )
			);
		});
	});

	it("highlightService() / clearHighlightedService()", () => {
		const service1 = { id: 1 };
		const service2 = { id: 2 };

		expect(comp.highlightedService).toBeUndefined();

		comp.highlightService(service1);
		expect(comp.highlightedService).toBe(service1);

		comp.highlightService(service2);
		expect(comp.highlightedService).toBe(service2);

		comp.clearHighlightedService();
		expect(comp.highlightedService).toBeNull();
	});

	it("navigateToOrganizationPage()", () => {
		const service = { id: 5 };
		const queryParams = {
			serviceCodes: [ "BM-6500.1500", "BH-1800", "BH-0500"	]
		};
		comp.selectedServiceCodes = queryParams.serviceCodes;

		comp.navigateToOrganizationPage(service);

		expect(router.navigate).toHaveBeenCalledWith([ '/organization', 5 ], { queryParams });
	});

	xit("updateQueryParams()", () => {});
});
