import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from '../../../../app.routes';
import { SkillsPage } from './skills-page';

describe('SkillsPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsPage],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });
  function render() {
    const fixture = TestBed.createComponent(SkillsPage);
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  }
  it('loads through the Skills route', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/skills', SkillsPage);
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain(
      'Technical depth',
    );
    expect(routes.find((route) => route.path === 'skills')?.title).toBe('Skills | Robert King');
  });
  it('has labelled sections and one heading without a nested main', () => {
    const page = render();
    expect(page.querySelectorAll('h1')).toHaveLength(1);
    expect(page.querySelector('main')).toBeNull();
    expect(page.querySelectorAll('section')).toHaveLength(3);
    page.querySelectorAll('section').forEach((section) => {
      const label = section.getAttribute('aria-labelledby');
      expect(label).toBeTruthy();
      expect(section.querySelector(`[id="${label}"]`)?.textContent?.trim()).toBeTruthy();
    });
  });
  it('groups skills with concrete technologies and practices', () => {
    const page = render();
    const cards = page.querySelectorAll('.skill-card');
    expect(Array.from(cards, (card) => card.querySelector('h3')?.textContent)).toEqual([
      'Web development',
      'Backend & data',
      'Cloud & modernisation',
      'Mobile development',
      'Engineering & leadership',
    ]);
    cards.forEach((card) => expect(card.querySelectorAll('li').length).toBeGreaterThan(0));
    for (const skill of ['Angular', 'Spring Boot', 'PostgreSQL', 'AWS', 'React Native', 'Vitest'])
      expect(page.textContent).toContain(skill);
  });
  it('links to supporting experience and projects', () => {
    expect(Array.from(render().querySelectorAll('a'), (link) => link.getAttribute('href'))).toEqual(
      ['/experience', '/projects'],
    );
  });
  for (const section of ['skills-hero', 'skill-groups', 'skills-cta']) {
    it(`matches the ${section} snapshot`, () => {
      const element = render().querySelector<HTMLElement>(`.${section}`);
      expect(element).toBeTruthy();
      expect(element).toMatchSnapshot();
    });
  }
});
