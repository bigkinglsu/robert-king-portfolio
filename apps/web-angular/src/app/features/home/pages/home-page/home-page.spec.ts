import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home-page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the hero heading', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector<HTMLHeadingElement>('h1');

    expect(heading?.textContent).toContain('Hi, I’m Robert King.');
  });

  it('should render both calls to action', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll<HTMLAnchorElement>('.hero__actions a');

    expect(links).toHaveLength(2);
    expect(links[0].textContent?.trim()).toBe('View projects');
    expect(links[0].getAttribute('href')).toBe('#projects');
    expect(links[1].textContent?.trim()).toBe('Contact me');
    expect(links[1].getAttribute('href')).toBe('mailto:kinghonore1@gmail.com');
  });

  it('should provide a target for the projects call to action', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const projects = compiled.querySelector<HTMLElement>('#projects');
    const heading = projects?.querySelector<HTMLHeadingElement>('h2');

    expect(projects).toBeTruthy();
    expect(heading?.textContent).toContain('Projects built with purpose.');
  });

  it('should match the rendered home page snapshot', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled).toMatchSnapshot();
  });
});
