import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreByRoundChartComponent } from './score-by-round-chart.component';

describe('ScoreByRoundChartComponent', () => {
  let component: ScoreByRoundChartComponent;
  let fixture: ComponentFixture<ScoreByRoundChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreByRoundChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreByRoundChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
