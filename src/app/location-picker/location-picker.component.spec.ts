import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AgmCoreModule as GoogleMapsModule } from 'angular2-google-maps/core';
import { FormsModule } from '@angular/forms';

import { LocationPickerComponent } from "./location-picker.component";

describe("LocationPickerComponent", () => {
	let de: DebugElement;
	let comp: LocationPickerComponent;
	let fixture: ComponentFixture<LocationPickerComponent>;

	beforeEach(async(() => {
		TestBed
		.configureTestingModule({
			declarations: [ LocationPickerComponent ],
			imports: [
				FormsModule,
				RouterTestingModule,
				GoogleMapsModule.forRoot({
					apiKey: "AIzaSyDnyjd_w7FdScc5fU1pc1DwncZOAXgeZMI",
					libraries: ['places']
				})
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LocationPickerComponent);
		comp = fixture.componentInstance;
		de = fixture.debugElement.query(By.css("h1"));
	});

	it("should create component", () => expect(comp).toBeDefined() );
});
