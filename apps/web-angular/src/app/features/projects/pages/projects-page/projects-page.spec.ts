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
    expect(compiled.querySelector('section[aria-labelledby="project-history-title"]')).toBeTruthy();
    expect(compiled.querySelector('main')).toBeNull();
    headings.slice(1).forEach((heading, index) => {
      expect(
        Number(heading.tagName.slice(1)) - Number(headings[index].tagName.slice(1)),
      ).toBeLessThanOrEqual(1);
    });
    expect(headings[0].tagName).toBe('H1');
    expect(headings.filter((heading) => heading.tagName === 'H1')).toHaveLength(1);
  });

  it('should retain the portfolio source and provide descriptive safe external links', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const projects = compiled.querySelectorAll('.project-grid article');
    const links = compiled.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]');

    expect(projects).toHaveLength(1);
    expect(compiled.textContent).toContain('Robert King Portfolio');
    expect(compiled.textContent).not.toContain('The Grays');
    expect(compiled.textContent).not.toContain('Sudoku');
    expect(links).toHaveLength(2);
    links.forEach((link) => {
      expect(link.getAttribute('rel')).toBe('noreferrer');
      expect(link.getAttribute('aria-label')).toContain('opens in a new tab');
    });
    expect(Array.from(links, (link) => link.href)).toEqual([
      'https://github.com/bigkinglsu/robert-king-portfolio',
      'https://github.com/bigkinglsu',
    ]);
  });

  it('should render eight professional engagements with contributions and technologies', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const projects = compiled.querySelectorAll('.project-history article');

    expect(projects).toHaveLength(8);
    expect(Array.from(projects, (project) => project.querySelector('h3')?.textContent)).toEqual([
      'Archive management and enterprise search',
      'CMS integration and form modernization',
      'Flutter developer onboarding',
      'Field sales and merchandising iOS app',
      'Brand ambassador Android app',
      'Compliance application cloud migration',
      'Retail marketing sites and mobile solutions',
      'Hybrid retail mobile applications',
    ]);
    projects.forEach((project) => {
      expect(project.querySelector('.project-card__meta')?.textContent).toMatch(/.+ · .+\d{4}/);
      expect(project.querySelectorAll('.project-card__contributions li').length).toBeGreaterThan(0);
      expect(project.querySelectorAll('.project-card__technologies li').length).toBeGreaterThan(0);
      expect(project.querySelector('a')).toBeNull();
    });
  });

  it('should match the rendered professional project history snapshot', () => {
    const history = (fixture.nativeElement as HTMLElement).querySelector('.project-history');
    expect(history).toBeTruthy();
    expect(history).toMatchSnapshot();
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
