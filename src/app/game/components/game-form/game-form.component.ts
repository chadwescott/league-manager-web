import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from 'src/app/core/models/game';
import { Team } from 'src/app/core/models/teams';
import { GameTeamScore } from 'src/app/core/models/game-team-score';
import { GameSettings } from 'src/app/core/models/game-settings';
import { GameRequest } from 'src/app/core/requests/game-request';

@Component({
  selector: 'lm-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {
  @Input() gameSettings: GameSettings;
  @Input() teams: Team[];

  @Output() gameSaved = new EventEmitter<GameRequest>();
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

    const teamIds = this.teamEntrants.map(x => x.id);

    const request = new GameRequest(new Date(Date.now()), teamIds);
    this.gameSaved.emit(request);
  }

  onCancel() {
    this.cancelled.emit();
  }
}
