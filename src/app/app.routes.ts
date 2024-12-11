import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
  { path: '', title: `Dashboard`, component: DashboardComponent },
  { path: 'map', title: `Map`, component: MapComponent },
];
