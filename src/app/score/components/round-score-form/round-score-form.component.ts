import { Component, OnInit, Input } from '@angular/core';
import { TeamRoundScore } from 'src/app/core/models/team-round-score';

@Component({
  selector: 'lm-round-score-form',
  templateUrl: './round-score-form.component.html',
  styleUrls: ['./round-score-form.component.scss']
})
export class RoundScoreFormComponent implements OnInit {
  @Input() teamRoundScore: TeamRoundScore;

  constructor() { }

  ngOnInit() {
  }

}
