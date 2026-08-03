import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home-page/home-page').then((component) => component.HomePage),
    title: 'Robert King | Software Engineer',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/pages/about-page/about-page').then(
        (component) => component.AboutPage,
      ),
    title: 'About | Robert King',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
