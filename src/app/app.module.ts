import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

// our modules
import { AppRoutingModule } from "./app-routing.module";

// third party modules
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

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
    FormsModule
  ]
})
export class AppModule { }