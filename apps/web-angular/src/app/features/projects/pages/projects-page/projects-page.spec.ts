import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPage } from './projects-page';

describe('ProjectsPage', () => {
  let component: ProjectsPage;
  let fixture: ComponentFixture<ProjectsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render labelled page sections with ordered headings', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const headings = Array.from(compiled.querySelectorAll('h1, h2, h3'));

    expect(compiled.querySelector('section[aria-labelledby="projects-title"]')).toBeTruthy();
    expect(
      compiled.querySelector('section[aria-labelledby="featured-projects-title"]'),
    ).toBeTruthy();
    expect(compiled.querySelector('section[aria-labelledby="projects-cta-title"]')).toBeTruthy();
    expect(headings[0].tagName).toBe('H1');
    expect(headings.filter((heading) => heading.tagName === 'H1')).toHaveLength(1);
  });

  it('should present three projects with safe external links', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const projects = compiled.querySelectorAll('.project-grid article');
    const links = compiled.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]');

    expect(projects).toHaveLength(3);
    expect(compiled.textContent).toContain('Robert King Portfolio');
    expect(compiled.textContent).toContain('The Grays');
    expect(compiled.textContent).toContain('Sudoku');
    expect(links).toHaveLength(4);
    links.forEach((link) => expect(link.getAttribute('rel')).toBe('noreferrer'));
  });

  it('should match the rendered Projects hero snapshot', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const hero = compiled.querySelector<HTMLElement>('.projects-hero');

    expect(hero).toBeTruthy();
    expect(hero).toMatchSnapshot();
  });

  it('should match the rendered featured projects snapshot', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const projects = compiled.querySelector<HTMLElement>('.featured-projects');

    expect(projects).toBeTruthy();
    expect(projects).toMatchSnapshot();
  });

  it('should match the rendered Projects call-to-action snapshot', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const callToAction = compiled.querySelector<HTMLElement>('.projects-cta');

    expect(callToAction).toBeTruthy();
    expect(callToAction).toMatchSnapshot();
  });
});
