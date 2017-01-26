import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

// our modules
import { AppRoutingModule } from "./app-routing.module";

// third party modules

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
    AppRoutingModule
  ]
})
export class AppModule { }
