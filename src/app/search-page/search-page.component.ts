import { Component } from "@angular/core";
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

@Component({
	selector: "search-page",
	styleUrls: [ "./search-page.css" ],
	templateUrl: "./search-page.html"
})
export class SearchPageComponent {
	private selectedOptions: number[];

	private myOptions: IMultiSelectOption[] = [
		{ id: 1, name: 'Primary Care' },
		{ id: 2, name: 'Women\'s Health/Family Planning' },
		{ id: 3, name: 'Pediatric' },
		{ id: 4, name: 'Dentistry' },
		{ id: 5, name: 'Osteopathy' },
		{ id: 6, name: 'Optometry/Ophthalmology' },
		{ id: 7, name: 'Open 24 Hours' },
		{ id: 8, name: 'Referrals Not Required' },
		{ id: 9, name: 'Medications/Pharmacy' }
	];

	onChange(ev) { console.log(`change event: ${ev}`); }
}
