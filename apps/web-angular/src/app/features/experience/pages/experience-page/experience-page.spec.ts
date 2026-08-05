import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencePage } from './experience-page';

describe('ExperiencePage', () => {
  let component: ExperiencePage;
  let fixture: ComponentFixture<ExperiencePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencePage],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperiencePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an accessible page heading and placeholder summary', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const page = compiled.querySelector<HTMLElement>('section[aria-labelledby="experience-title"]');
    const heading = compiled.querySelector<HTMLHeadingElement>('#experience-title');
    const summary = compiled.querySelector<HTMLElement>('.experience-page__summary');

    expect(page).toBeTruthy();
    expect(heading?.textContent).toContain('Building dependable software');
    expect(summary?.textContent).toContain('engineering impact is coming soon');
  });

  it('should match the rendered Experience page snapshot', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const page = compiled.querySelector<HTMLElement>('.experience-page');

    expect(page).toBeTruthy();
    expect(page).toMatchSnapshot();
  });
});
