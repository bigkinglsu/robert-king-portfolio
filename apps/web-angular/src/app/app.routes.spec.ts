import { routes } from './app.routes';

describe('Application routes', () => {
  it('should lazy load the Experience page with its page title', () => {
    const experienceRoute = routes.find((route) => route.path === 'experience');

    expect(experienceRoute).toBeTruthy();
    expect(experienceRoute?.loadComponent).toBeTypeOf('function');
    expect(experienceRoute?.title).toBe('Experience | Robert King');
  });

  it('should lazy load the About page with its page title', () => {
    const aboutRoute = routes.find((route) => route.path === 'about');

    expect(aboutRoute).toBeTruthy();
    expect(aboutRoute?.loadComponent).toBeTypeOf('function');
    expect(aboutRoute?.title).toBe('About | Robert King');
  });
});
