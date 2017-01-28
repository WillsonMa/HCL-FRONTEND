import { Component, OnInit, Input } from "@angular/core";

import { MapsAPILoader } from 'angular2-google-maps/core';

declare var google: any;

@Component({
	selector: "location-picker",
	styleUrls: [ "./location-picker.css" ],
	templateUrl: "./location-picker.html"
})
export class LocationPickerComponent implements OnInit {
	constructor(private mapsLoader: MapsAPILoader) { }

	latitude: number;
	longitude: number;

	ngOnInit() {
		this.mapsLoader.load()
		.then(() => {
			const autocomplete = new google.maps.places.Autocomplete(document.getElementById("location-picker"), {});
			google.maps.event.addListener(autocomplete, 'place_changed', () => {
				const place = autocomplete.getPlace();

				this.latitude = place.geometry.location.lat();
				this.longitude = place.geometry.location.lng();
			});
		});
	}
}
