import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameScoreSummaryComponent } from './game-score-summary.component';

describe('GameScoreSummaryComponent', () => {
  let component: GameScoreSummaryComponent;
  let fixture: ComponentFixture<GameScoreSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameScoreSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameScoreSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
