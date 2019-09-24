import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAdHocDetailsComponent } from './game-ad-hoc-details.component';

describe('GameAdHocDetailsComponent', () => {
  let component: GameAdHocDetailsComponent;
  let fixture: ComponentFixture<GameAdHocDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameAdHocDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameAdHocDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
