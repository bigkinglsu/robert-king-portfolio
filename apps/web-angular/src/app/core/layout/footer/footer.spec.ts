import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render footer navigation and contact links', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const navigation = compiled.querySelector<HTMLElement>('nav[aria-label="Footer navigation"]');
    const links = compiled.querySelectorAll<HTMLAnchorElement>('.site-footer a');

    expect(navigation).toBeTruthy();
    expect(links).toHaveLength(6);
    expect(links[0].getAttribute('href')).toBe('#home');
    expect(links[1].getAttribute('href')).toBe('#home');
    expect(links[2].getAttribute('href')).toBe('#projects');
    expect(links[3].getAttribute('href')).toBe('https://github.com/bigkinglsu');
    expect(links[3].getAttribute('target')).toBe('_blank');
    expect(links[3].getAttribute('rel')).toBe('noopener noreferrer');
    expect(links[4].getAttribute('href')).toBe('mailto:kinghonore1@gmail.com');
    expect(links[5].getAttribute('href')).toBe('#home');
  });

  it('should render the copyright notice', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.site-footer__bottom')?.textContent).toContain(
      `© ${new Date().getFullYear()} Robert King`,
    );
  });

  it('should match the rendered footer snapshot', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const footer = compiled.querySelector<HTMLElement>('.site-footer');
    const snapshot = footer?.cloneNode(true) as HTMLElement | undefined;

    for (const element of snapshot ? [snapshot, ...snapshot.querySelectorAll('*')] : []) {
      for (const attribute of [...element.attributes]) {
        if (attribute.name.startsWith('_ngcontent-') || attribute.name.startsWith('_nghost-')) {
          element.removeAttribute(attribute.name);
        }
      }
    }

    const html = snapshot?.outerHTML.replace(
      `${new Date().getFullYear()} Robert King`,
      '[current year] Robert King',
    );

    expect(html).toMatchSnapshot();
  });
});
