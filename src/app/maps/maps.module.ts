import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniComponent } from './components/mini/mini.component';
import { MarkersComponent } from './pages/markers/markers.component';
import { ZoomComponent } from './pages/zoom/zoom.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';


@NgModule({
	declarations: [
		MiniComponent,
		FullScreenComponent,
		MarkersComponent,
		ZoomComponent,
  FullScreenComponent
	],
	imports: [
		CommonModule,
		MapsRoutingModule
	]
})
export class MapsModule { }
