import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// our modules
import { AppRoutingModule } from "./app-routing.module";

// third party modules
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import { AgmCoreModule as GoogleMapsModule } from 'angular2-google-maps/core';

// our components
import { AppComponent } from "./app.component";
import { LocationPickerComponent } from "./location-picker/location-picker.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { OrganizationPageComponent } from "./organization-page/organization-page.component";
import { ResultsPageComponent } from "./results-page/results-page.component";
import { SearchPageComponent } from "./search-page/search-page.component";

@NgModule({
	bootstrap: [ AppComponent ],
	declarations: [
		AppComponent,
		// pages
		SearchPageComponent,
		ResultsPageComponent,
		OrganizationPageComponent,
		// components
		LocationPickerComponent,
		NavigationComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MultiselectDropdownModule,
		FormsModule,
		GoogleMapsModule.forRoot({
			apiKey: "AIzaSyDnyjd_w7FdScc5fU1pc1DwncZOAXgeZMI",
			libraries: ['places']
		}),
		HttpModule
	]
})
export class AppModule { }
