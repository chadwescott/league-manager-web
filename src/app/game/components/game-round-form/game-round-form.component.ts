import { Component, OnInit, Input } from '@angular/core';
import { GameRound } from 'src/app/core/models/game-round';

@Component({
  selector: 'lm-game-round-form',
  templateUrl: './game-round-form.component.html',
  styleUrls: ['./game-round-form.component.scss']
})
export class GameRoundFormComponent implements OnInit {
  @Input() gameRound: GameRound;

  constructor() { }

  ngOnInit() {
  }
}
