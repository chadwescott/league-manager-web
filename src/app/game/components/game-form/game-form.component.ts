import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from 'src/app/core/models/game';
import { Team } from 'src/app/core/models/teams';

@Component({
  selector: 'lm-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {
  @Input() minTeams: number;
  @Input() maxTeams: number;
  @Input() teams: Team[];

  @Output() gameSaved = new EventEmitter<Game>();

  numberOfTeams: number;
  numberOfTeamsOptions: number[] = [];
  teamEntrants: Team[] = [];
  errorMessage: string;

  constructor() { }

  ngOnInit() {
    this.numberOfTeams = this.minTeams;
    for (let i = this.minTeams; i <= this.maxTeams; i++) {
      this.numberOfTeamsOptions.push(i);
    }
    this.numberOfTeamsChanged();
  }

  numberOfTeamsChanged() {
    // const defaultTeam = this.teams.length > 0 ? this.teams[0] : null;
    const defaultTeam = null;
    while (this.numberOfTeams > this.teamEntrants.length) {
      this.teamEntrants.push(defaultTeam);
    }

    while (this.numberOfTeams < this.teamEntrants.length) {
      this.teamEntrants.pop();
    }
  }

  save() {
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

    const game = new Game('', 0, this.teamEntrants, new Date(Date.now()));
    this.gameSaved.emit(game);

    console.log(game);
  }

  selectedTeamChangedHandler(index: number, team: Team): void {
    this.teamEntrants[index] = team;
  }
}
