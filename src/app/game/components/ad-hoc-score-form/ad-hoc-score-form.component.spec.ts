import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHocScoreFormComponent } from './ad-hoc-score-form.component';

describe('AdHocScoreFormComponent', () => {
  let component: AdHocScoreFormComponent;
  let fixture: ComponentFixture<AdHocScoreFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdHocScoreFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHocScoreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
