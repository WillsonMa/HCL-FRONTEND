import { Component } from "@angular/core";
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

@Component({
	selector: "search-page",
	styleUrls: [ "./search-page.css" ],
	templateUrl: "./search-page.html"
})
export class SearchPageComponent {
	private selectedServiceCodes: number[];

	private myOptions: IMultiSelectOption[] = [
		{ id: "BH-0500", name: "At Risk/Homeless Housing Related Assistance Programs" },
		{ id: "BM-6500.1500", name: "Clothing" },
		{ id: "BH-1800", name: "Emergency Shelter" },
		{ id: "PN-8100.5000", name: "Mental Health Related Support Groups" },
		{ id: "LN-9500", name: "Women's Health Centers" },
		{ id: "LE-0100", name: "Primary Health Care" },
		{ id: "LT-3000", name: "Hospice Care" },
		{ id: "PN-8100.3000-050", name: "Cancer Support Group" },
		{ id: "LV-1600", name: "Dental Care" },
		{ id: "BD-1800.2000", name: "Food Pantry" }
	];
}
