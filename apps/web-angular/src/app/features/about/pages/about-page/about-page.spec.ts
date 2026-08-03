import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPage } from './about-page';

describe('AboutPage', () => {
  let component: AboutPage;
  let fixture: ComponentFixture<AboutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the page heading and engineering summary', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector<HTMLHeadingElement>('h1');
    const summary = compiled.querySelector<HTMLElement>('.about-hero__summary');

    expect(heading?.textContent).toContain('Engineering with purpose, clarity, and care.');
    expect(summary?.textContent).toContain('Angular, Java, and cloud technologies');
  });

  it('should associate each section with an accessible heading', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const labelledSections = compiled.querySelectorAll<HTMLElement>('section[aria-labelledby]');

    expect(labelledSections).toHaveLength(4);

    for (const section of labelledSections) {
      const headingId = section.getAttribute('aria-labelledby');
      expect(headingId).toBeTruthy();
      expect(section.querySelector(`#${headingId}`)).toBeTruthy();
    }
  });

  it('should render the engineering principles', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const principles = compiled.querySelectorAll<HTMLLIElement>('.principles__list li');

    expect(principles).toHaveLength(3);
    expect(principles[0].textContent).toContain('Build for people');
    expect(principles[1].textContent).toContain('Make quality visible');
    expect(principles[2].textContent).toContain('Keep learning');
  });

  it('should provide an email call to action', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const contactLink = compiled.querySelector<HTMLAnchorElement>('.about-cta a');

    expect(contactLink?.textContent?.trim()).toBe('Contact me');
    expect(contactLink?.getAttribute('href')).toBe('mailto:kinghonore1@gmail.com');
  });

  it('should match the rendered about page snapshot', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled).toMatchSnapshot();
  });
});
