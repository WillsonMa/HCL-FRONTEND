import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

@Component({
	selector: 'services-multiselect',
	templateUrl: './services-multiselect.component.html',
	styleUrls: ['./services-multiselect.component.css']
})
export class ServicesMultiselectComponent {
	@Input()
	selectedServiceCodes: number[];

	@Output()
	selectedServiceCodesChange = new EventEmitter();

	@Input()
	dropdownClass: string = '';

	updateSelectedServiceCodes(selectedServiceCodes) {
		this.selectedServiceCodes = selectedServiceCodes;
		this.selectedServiceCodesChange.emit(this.selectedServiceCodes);
	}

	availableServiceCodes: IMultiSelectOption[] = [
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

	multiselectSettings: IMultiSelectSettings = {
		//		pullRight: false,
		//		enableSearch: false,
		//		checkedStyle: 'checkboxes',
		//		buttonClasses: 'btn btn-default',
		//		selectionLimit: 0,
		//		closeOnSelect: false,
		//		showCheckAll: false,
		//		showUncheckAll: false,
		dynamicTitleMaxItems: 0,
		maxHeight: '500px'
	};

	multiselectTexts: IMultiSelectTexts = {
		//		checkAll: 'Check all',
		//		uncheckAll: 'Uncheck all',
		//		checked: 'checked',
		//		checkedPlural: 'checked',
		//		searchPlaceholder: 'Search...',
		defaultTitle: 'SERVICES'
	}

}
