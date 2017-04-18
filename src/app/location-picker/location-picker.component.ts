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
		this.setDefaultGeoLocation();
		this.setupGoogleMapsAutocomplete();
	}

	setDefaultGeoLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(({ coords }) => {
				const geocoder = new google.maps.Geocoder();

				var latlng = { lat: coords.latitude, lng: coords.longitude };
				geocoder.geocode({ 'location': latlng }, ([ place ], status) => {
					if (status === 'OK') {
						if (place) {
							const city = place.address_components
								.filter(({ types }) => types[0] === 'locality')
								.map(({ long_name }) => long_name)
								.reduce(city => city);

							const state = place.address_components
								.filter(({ types }) => types[0] === 'administrative_area_level_1')
								.map(({ short_name }) => short_name)
								.reduce(state => state);

							// if user typed in a location, don't override it
							if (!this.location) {
								this.updateLocationFromOutsideZone({
									latitude: coords.latitude,
									longitude: coords.longitude,
									name: `${city}, ${state}`
								});
							}
						}
					}
				});
			}, (err) => {
				console.log(`error retrieving user's coords: ${err}`);
			});
		}
	}

	setupGoogleMapsAutocomplete() {
		this.mapsLoader.load()
		.then(() => {
			const $el = document.getElementById("location-picker");
			const autocomplete = new google.maps.places.Autocomplete($el, {});

			google.maps.event.addListener(autocomplete, 'place_changed', () => {
				const place = autocomplete.getPlace();
				this.updateLocationFromOutsideZone({
					latitude: place.geometry.location.lat(),
					longitude: place.geometry.location.lng(),
					name: place.formatted_address
				});
			});
		});
	}

	updateLocationFromOutsideZone(location) {
		this.ngZone.run(() => {
			this.location = location;
			this.locationChange.emit(this.location);
		});
	}
}
