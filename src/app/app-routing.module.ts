import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrganizationPageComponent } from "./organization-page/organization-page.component";
import { ResultsPageComponent } from "./results-page/results-page.component";
import { SearchPageComponent } from "./search-page/search-page.component";

import { assign } from "lodash";

const routes: Routes = [
  { path: "",  component: SearchPageComponent },
  { path: "results",  component: ResultsPageComponent },
  { path: "organization",  component: OrganizationPageComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
