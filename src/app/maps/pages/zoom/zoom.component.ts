import { AfterViewInit, Component, OnDestroy } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
	selector: 'app-zoom',
	templateUrl: './zoom.component.html',
	styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements AfterViewInit, OnDestroy {

	center: [number, number] = [-74.80565564391736, 10.969325115604596];

	map!: mapboxgl.Map;

	constructor() { }

	ngOnDestroy(): void {
		this.map.off('move', () => {});
	}

	ngAfterViewInit(): void {

		this.map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: this.center,
			zoom: 11,
		});

		///zoom y rotacion en el mapa.
		this.map.addControl(new mapboxgl.NavigationControl());

		///Movimiento del mapa
		this.map.on('move', (event) => {

			const target = event.target;
			this.center[0] = target.getCenter().lng;
			this.center[1] = target.getCenter().lat;

		});

	}

}
