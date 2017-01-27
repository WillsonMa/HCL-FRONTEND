import { Component, OnInit } from "@angular/core";

import {MapsAPILoader} from 'angular2-google-maps/core';

declare var google: any;

@Component({
	selector: "location-picker",
	styleUrls: [ "./location-picker.css" ],
	templateUrl: "./location-picker.html"
})
export class LocationPickerComponent implements OnInit {
  constructor(private mapsLoader: MapsAPILoader) { }

  ngOnInit() {
    this.mapsLoader.load()
      .then(() => {
        let autocomplete = new google.maps.places.Autocomplete(document.getElementById("location-picker"), {});
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
          const place = autocomplete.getPlace();
          console.log(place);
        });
      });
  }
}
