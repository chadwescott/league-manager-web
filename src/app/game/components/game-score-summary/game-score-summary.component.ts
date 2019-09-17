import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/core/models/game';
import { TeamScore } from 'src/app/core/models/team-score';

@Component({
  selector: 'lm-game-score-summary',
  templateUrl: './game-score-summary.component.html',
  styleUrls: ['./game-score-summary.component.scss']
})
export class GameScoreSummaryComponent implements OnInit {
  @Input() game: Game;
  @Input() teamScores: TeamScore[];

  displayedColumns: string[] = ['team', 'score'];

  constructor() { }

  ngOnInit() {
  }

}
