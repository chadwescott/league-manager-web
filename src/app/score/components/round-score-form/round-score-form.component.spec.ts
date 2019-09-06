import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundScoreFormComponent } from './round-score-form.component';

describe('RoundScoreFormComponent', () => {
  let component: RoundScoreFormComponent;
  let fixture: ComponentFixture<RoundScoreFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundScoreFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundScoreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
