import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule }   from '@angular/forms';

import { AgmCoreModule as GoogleMapsModule } from 'angular2-google-maps/core';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

import { LocationPickerComponent } from "../location-picker/location-picker.component";
import { SearchPageComponent } from "./search-page.component";
import { ServicesMultiselectComponent } from '../services-multiselect/services-multiselect.component';

describe("SearchPageComponent", () => {
	let de: DebugElement;
	let comp: SearchPageComponent;
	let fixture: ComponentFixture<SearchPageComponent>;

	beforeEach(async(() => {
		TestBed
		.configureTestingModule({
			declarations: [
				SearchPageComponent,
				LocationPickerComponent,
				ServicesMultiselectComponent
			],
			imports: [
				RouterTestingModule,
				MultiselectDropdownModule,
				FormsModule,
				GoogleMapsModule.forRoot({
					apiKey: "AIzaSyDnyjd_w7FdScc5fU1pc1DwncZOAXgeZMI",
					libraries: ['places']
				})
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchPageComponent);
		comp = fixture.componentInstance;
		de = fixture.debugElement.query(By.css("h1"));
	});

	it("should create component", () => expect(comp).toBeDefined() );
});
