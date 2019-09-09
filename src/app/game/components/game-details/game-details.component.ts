import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from 'src/app/core/models/game';
import { GameTeamScore } from 'src/app/core/models/game-team-score';

@Component({
  selector: 'lm-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  @Input() game: Game;

  @Output() gameClosed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClose(): void {
    this.gameClosed.emit();
  }
}
