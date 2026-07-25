import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsistencyHeatmap } from './consistency-heatmap';

describe('ConsistencyHeatmap', () => {
  let component: ConsistencyHeatmap;
  let fixture: ComponentFixture<ConsistencyHeatmap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsistencyHeatmap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsistencyHeatmap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
