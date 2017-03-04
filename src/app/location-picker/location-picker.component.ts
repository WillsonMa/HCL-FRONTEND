import { Component, OnInit, Input, Output, NgZone, EventEmitter } from "@angular/core";

import { MapsAPILoader } from 'angular2-google-maps/core';

declare var google: any;

export class Location {
	latitude: number;
	longitude: number;
	name: string;
}

@Component({
	selector: "location-picker",
	styleUrls: [ "./location-picker.css" ],
	templateUrl: "./location-picker.html"
})
export class LocationPickerComponent implements OnInit {
	constructor(
		private mapsLoader: MapsAPILoader,
		private ngZone: NgZone
	) { }

	@Input()
	location: Location;

	@Output()
	locationChange = new EventEmitter();

	ngOnInit() {
		this.mapsLoader.load()
		.then(() => {
			const autocomplete = new google.maps.places.Autocomplete(document.getElementById("location-picker"), {});
			google.maps.event.addListener(autocomplete, 'place_changed', () => {
				this.ngZone.run(() => {
					const place = autocomplete.getPlace();
					this.updateLocation(place);
				});
			});
		});
	}

	updateLocation(place) {
		this.location = {
			latitude: place.geometry.location.lat(),
			longitude: place.geometry.location.lng(),
			name: place.formatted_address
		};
		this.locationChange.emit(this.location);
	}
}
