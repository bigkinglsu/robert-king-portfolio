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

  it('should render an accessible page heading and career sections', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const page = compiled.querySelector<HTMLElement>('section[aria-labelledby="experience-title"]');
    const heading = compiled.querySelector<HTMLHeadingElement>('#experience-title');
    const career = compiled.querySelector<HTMLElement>('section[aria-labelledby="career-title"]');
    const engagements = compiled.querySelector<HTMLElement>(
      'section[aria-labelledby="engagements-title"]',
    );

    expect(page).toBeTruthy();
    expect(heading?.textContent).toContain('Engineering dependable systems');
    expect(career).toBeTruthy();
    expect(engagements).toBeTruthy();
  });

  it('should present roles and selected engagements as structured content', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('.career__timeline > li')).toHaveLength(3);
    expect(compiled.querySelectorAll('.engagements__grid article')).toHaveLength(4);
    expect(compiled.textContent).toContain('Senior Software Engineer');
    expect(compiled.textContent).toContain('Federal government');
  });

  it('should match the rendered Experience page snapshot', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const page = compiled.querySelector<HTMLElement>(':scope > *');

    expect(page).toBeTruthy();
    expect(page).toMatchSnapshot();
  });
});
