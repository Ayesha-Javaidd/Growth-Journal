import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seerah } from './seerah';

describe('Seerah', () => {
  let component: Seerah;
  let fixture: ComponentFixture<Seerah>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seerah]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seerah);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
