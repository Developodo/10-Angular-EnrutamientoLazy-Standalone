import { Routes } from '@angular/router';
import { E404Component } from './pages/e404/e404.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { title: 'Inicio', path: 'home', component: HomeComponent },
  {
    title: 'Conductor',
    path: 'driver/:name',
    loadComponent: () =>
      import('./pages/driver/driver.component').then((m) => m.DriverComponent),
  },
  {
    title: 'About',
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.routes').then((m) => m.ABOUT_ROUTES),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  {
    path: '**',
    loadComponent: () =>
      import('./pages/e404/e404.component').then((m) => m.E404Component),
  }, // Wildcard route for a 404 page
];
