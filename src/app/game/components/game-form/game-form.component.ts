import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from 'src/app/core/models/game';
import { Team } from 'src/app/core/models/teams';
import { TeamScore } from 'src/app/core/models/team-score';
import { GameSettings } from 'src/app/core/models/game-settings';

@Component({
  selector: 'lm-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {
  @Input() gameSettings: GameSettings;
  @Input() teams: Team[];

  @Output() gameSaved = new EventEmitter<Game>();
  @Output() cancelled = new EventEmitter();

  numberOfTeams: number;
  numberOfTeamsOptions: number[] = [];
  teamNumbers = [];
  teamEntrants: Team[] = [];
  errorMessage: string;

  constructor() { }

  ngOnInit() {
    for (let i = this.gameSettings.minTeams; i <= this.gameSettings.maxTeams; i++) {
      this.numberOfTeamsOptions.push(i);
    }

    this.numberOfTeams = this.gameSettings.minTeams;
    this.numberOfTeamsChanged();
  }

  numberOfTeamsChanged() {
    while (this.numberOfTeams > this.teamEntrants.length) {
      this.teamEntrants.push(null);
      this.teamNumbers.push(null);
    }

    while (this.numberOfTeams < this.teamEntrants.length) {
      this.teamEntrants.pop();
      this.teamNumbers.pop();
    }
  }

  onSave() {
    this.errorMessage = null;
    for (let i = 0; i < this.teamEntrants.length; i++) {
      if (this.teamEntrants[i] == null) {
        this.errorMessage = 'All teams are required';
        return;
      }
      if (this.teamEntrants.lastIndexOf(this.teamEntrants[i]) !== i) {
        this.errorMessage = 'All teams must be unique';
        return;
      }
    }

    const teamScores = this.teamEntrants.map(x => new TeamScore('', '', x));

    const game = new Game('', 0, teamScores, new Date(Date.now()), this.gameSettings);
    this.gameSaved.emit(game);
  }

  onCancel() {
    this.cancelled.emit();
  }
}
