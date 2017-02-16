/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ServicesMultiselectComponent } from './services-multiselect.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

describe('ServicesMultiselectComponent', () => {
	let comp: ServicesMultiselectComponent;
	let fixture: ComponentFixture<ServicesMultiselectComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ServicesMultiselectComponent ],
			imports: [ MultiselectDropdownModule, FormsModule ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ServicesMultiselectComponent);
		comp = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create component", () => expect(comp).toBeDefined() );
});
