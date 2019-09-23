import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/core/models/game';
import { TeamScore } from 'src/app/core/models/team-score';
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
      ]),
      transition('* => *', [
        animate(SCALE_IN_OUT_TIMING, style({ background: 'yellow', color: 'red' }))
      ])
    ])
  ]
})
export class GameScoreSummaryComponent implements OnInit {
  @Input() teamScores: TeamScore[];

  displayedColumns: string[] = ['team', 'score'];

  constructor() { }

  ngOnInit() {
  }

  onScoreChangedStart() {
    console.log('team score changed');
  }
}
