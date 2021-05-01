import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	title = 'maps-angular';

	ngOnInit(): void {
		console.log();
		(mapboxgl as any).accessToken = environment.mapboxToken;
	}
}
