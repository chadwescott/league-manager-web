import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRoundListComponent } from './game-round-list.component';

describe('GameRoundListComponent', () => {
  let component: GameRoundListComponent;
  let fixture: ComponentFixture<GameRoundListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRoundListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRoundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
