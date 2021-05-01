import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
	selector: 'app-markers',
	templateUrl: './markers.component.html',
	styles: [
	]
})
export class MarkersComponent implements AfterViewInit, OnDestroy {

	center: [number, number] = [-74.75626517666531, 10.95051699443684];

	map!: mapboxgl.Map;

	constructor() { }

	ngOnDestroy(): void {
		this.map.off('move', () => { });
	}

	ngAfterViewInit(): void {

		this.map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: this.center,
			zoom: 15,
		});

		const marker1 = new mapboxgl.Marker({ color: 'black', rotation: 0, draggable: true })
			.setLngLat(this.center)
			.addTo(this.map);

		const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 0 })
			.setLngLat([-74.79785352793031, 11.010825544858541])
			.addTo(this.map);

		///Movimiento del mapa
		this.map.on('move', (event) => {

			const target = event.target;
			this.center[0] = target.getCenter().lng;
			this.center[1] = target.getCenter().lat;

		});

	}

}
