import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpModule } from '@angular/http';
import { Location } from '@angular/common';

import { OrganizationPageComponent } from "./organization-page.component";
import { HttpPipe } from '../http.pipe';
import { TimePipe } from '../time.pipe';

describe("OrganizationPageComponent", () => {
	let de: DebugElement;
	let comp: OrganizationPageComponent;
	let fixture: ComponentFixture<OrganizationPageComponent>;
	let location = {
		back: jasmine.createSpy('back')
	};

	beforeEach(async(() => {
		TestBed
		.configureTestingModule({
			declarations: [ OrganizationPageComponent, HttpPipe, TimePipe ],
			imports: [
				RouterTestingModule,
				HttpModule
			],
			providers: [
				{ provide: Location, useValue: location }
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(OrganizationPageComponent);
		comp = fixture.componentInstance;
		de = fixture.debugElement.query(By.css("h1"));
	});

	it("navigateBack()", () => {
		comp.navigateBack();
		expect(location.back).toHaveBeenCalled();
	});

	it("should create component", () => expect(comp).toBeDefined() );
});
