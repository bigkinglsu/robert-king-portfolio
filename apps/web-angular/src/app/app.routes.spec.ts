import { routes } from './app.routes';

describe('Application routes', () => {
  it('should lazy load the About page with its page title', () => {
    const aboutRoute = routes.find((route) => route.path === 'about');

    expect(aboutRoute).toBeTruthy();
    expect(aboutRoute?.loadComponent).toBeTypeOf('function');
    expect(aboutRoute?.title).toBe('About | Robert King');
  });
});
