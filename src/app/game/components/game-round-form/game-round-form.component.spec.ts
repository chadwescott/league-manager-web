import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRoundFormComponent } from './game-round-form.component';

describe('GameRoundFormComponent', () => {
  let component: GameRoundFormComponent;
  let fixture: ComponentFixture<GameRoundFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRoundFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRoundFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
