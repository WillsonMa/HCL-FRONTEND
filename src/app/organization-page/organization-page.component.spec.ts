import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpModule } from '@angular/http';

import { OrganizationPageComponent } from "./organization-page.component";

describe("OrganizationPageComponent", () => {
	let de: DebugElement;
	let comp: OrganizationPageComponent;
	let fixture: ComponentFixture<OrganizationPageComponent>;

	beforeEach(async(() => {
		TestBed
		.configureTestingModule({
			declarations: [ OrganizationPageComponent ],
			imports: [
				RouterTestingModule,
				HttpModule
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(OrganizationPageComponent);
		comp = fixture.componentInstance;
		de = fixture.debugElement.query(By.css("h1"));
	});

	it("should create component", () => expect(comp).toBeDefined() );
});
