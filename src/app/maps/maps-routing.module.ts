import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarkersComponent } from './pages/markers/markers.component';
import { ZoomComponent } from './pages/zoom/zoom.component';

const routes: Routes = [

	{
		path: '',
		children: [
			{ path: 'fullscreen', component: FullScreenComponent },
			{ path: 'zoom', component: ZoomComponent },
			{ path: 'markers', component: MarkersComponent },
			{ path: '**', redirectTo: 'fullscreen' },
		]
	}

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MapsRoutingModule { }
