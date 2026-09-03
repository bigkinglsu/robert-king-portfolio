import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home-page/home-page').then((component) => component.HomePage),
    title: 'Robert King | Software Engineer',
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./features/experience/pages/experience-page/experience-page').then(
        (component) => component.ExperiencePage,
      ),
    title: 'Experience | Robert King',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/pages/projects-page/projects-page').then(
        (component) => component.ProjectsPage,
      ),
    title: 'Projects | Robert King',
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
