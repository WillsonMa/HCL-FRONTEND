import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: "results-page",
	styleUrls: [ "./results-page.css" ],
	templateUrl: "./results-page.html"
})
export class ResultsPageComponent implements OnInit, OnDestroy {
	private sub: any;

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.sub = this.route.queryParams.subscribe(params => {
			console.log(params);
		});
	}

	ngOnDestroy() {
		if (this.sub) {
			this.sub.unsubscribe();
		}
	}
}
