import { Component } from "@angular/core";

import { Location } from '../location-picker/location-picker.component';

@Component({
	selector: "search-page",
	styleUrls: [ "./search-page.css" ],
	templateUrl: "./search-page.html"
})
export class SearchPageComponent {
	location: Location;
}
