import { Routes } from '@angular/router';
import { MainComponent } from '../app/main/main.component';
// imports for different components

export const appRoutes: Routes = [
  { path: '', component: MainComponent },
  // Leave at the bottom
  { path: '**', redirectTo: '#', pathMatch: 'full'},
];
