import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Iniciarsesion } from './iniciarsesion';

describe('Iniciarsesion', () => {
  let component: Iniciarsesion;
  let fixture: ComponentFixture<Iniciarsesion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iniciarsesion],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Iniciarsesion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
