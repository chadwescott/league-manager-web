import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TeamScore } from 'src/app/core/models/team-score';
import { TeamScoreEvent } from 'src/app/core/models/team-score-event';

@Component({
  selector: 'lm-ad-hoc-score-form',
  templateUrl: './ad-hoc-score-form.component.html',
  styleUrls: ['./ad-hoc-score-form.component.scss']
})
export class AdHocScoreFormComponent implements OnInit {
  @Input() teamScores: TeamScore[];
  @Output() teamScore = new EventEmitter<TeamScoreEvent>();

  score = 0;

  constructor() { }

  ngOnInit() {
  }

  onAddTeamScore(teamScore: TeamScore) {
    const event = new TeamScoreEvent(teamScore.team, this.score, new Date(Date.now()));
    this.teamScore.emit(event);
    this.score = 0;
  }
}
