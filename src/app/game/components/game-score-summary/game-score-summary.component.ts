import { Component, OnInit, Input } from '@angular/core';
import { GameTeamScore } from 'src/app/core/models/game-team-score';
import { trigger, transition, animate, style } from '@angular/animations';
import { SCALE_IN_OUT_TIMING } from 'src/app/core/constants/timings';

@Component({
  selector: 'lm-game-score-summary',
  templateUrl: './game-score-summary.component.html',
  styleUrls: ['./game-score-summary.component.scss'],
  animations: [
    trigger('scoreChanged', [
      transition(':increment', [
        animate(SCALE_IN_OUT_TIMING, style({ background: 'yellow', color: 'black' }))
      ]),
      transition(':decrement', [
        animate(SCALE_IN_OUT_TIMING, style({ background: 'yellow', color: 'red' }))
      ])
    ])
  ]
})
export class GameScoreSummaryComponent implements OnInit {
  @Input() teamScores: GameTeamScore[];

  displayedColumns: string[] = ['team', 'score'];

  constructor() { }

  ngOnInit() {
  }
}
