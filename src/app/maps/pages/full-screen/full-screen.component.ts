import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
	selector: 'app-full-screen',
	templateUrl: './full-screen.component.html',
	styles: []
})
export class FullScreenComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {

		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-74.80565564391736, 10.969325115604596],
			zoom: 11,
		});

	}

}
