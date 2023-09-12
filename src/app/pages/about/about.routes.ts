import { Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { AngularComponent } from './angular/angular.component';
import { AboutComponent } from './about.component';

export const ABOUT_ROUTES: Routes = [
  {
    path: '',
    component: AboutComponent,
    providers: [],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'author',
      },
      {
        path: 'author',
        loadComponent: () =>
          import('./author/author.component') //lazy
            .then((m) => m.AuthorComponent),
      },
      {
        path: 'angular',
        loadComponent: () =>
          import('./angular/angular.component') //lazy
            .then((m) => m.AngularComponent),
      },
      /* También opción de eager en subrutas
        {
            path: 'author',
            component: AuthorComponent
        },
        {
            path: 'angular',
            component: AngularComponent
        },
        */
    ],
  },
];
