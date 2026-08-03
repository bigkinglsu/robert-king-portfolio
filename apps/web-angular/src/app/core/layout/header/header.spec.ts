import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the primary navigation', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const navigation = compiled.querySelector<HTMLElement>('nav[aria-label="Primary navigation"]');

    expect(navigation).toBeTruthy();
  });

  it('should render the expected navigation links', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll<HTMLAnchorElement>('.navigation a');

    expect(links).toHaveLength(5);
    expect(links[0].getAttribute('href')).toBe('/#home');
    expect(links[1].getAttribute('href')).toBe('/#home');
    expect(links[2].getAttribute('href')).toBe('/about');
    expect(links[3].getAttribute('href')).toBe('/#projects');
    expect(links[4].getAttribute('href')).toBe('mailto:kinghonore1@gmail.com');
  });

  it('should match the rendered header snapshot', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector<HTMLElement>('.site-header');

    expect(header).toBeTruthy();
    expect(header).toMatchSnapshot();
  });
});
