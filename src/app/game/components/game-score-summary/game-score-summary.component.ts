import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/core/models/game';
import { GameTeamScore } from 'src/app/core/models/game-team-score';

@Component({
  selector: 'lm-game-score-summary',
  templateUrl: './game-score-summary.component.html',
  styleUrls: ['./game-score-summary.component.scss']
})
export class GameScoreSummaryComponent implements OnInit {
  @Input() game: Game;
  @Input() teamScores: GameTeamScore[];

  displayedColumns: string[] = ['team', 'score'];

  constructor() { }

  ngOnInit() {
  }

}
