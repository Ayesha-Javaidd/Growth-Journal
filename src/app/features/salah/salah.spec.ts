import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salah } from './salah';

describe('Salah', () => {
  let component: Salah;
  let fixture: ComponentFixture<Salah>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Salah]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Salah);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
