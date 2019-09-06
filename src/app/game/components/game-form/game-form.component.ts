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
  teamNumbers = [];
  teamEntrants: Team[] = [];
  errorMessage: string;

  constructor() { }

  ngOnInit() {
    for (let i = this.minTeams; i <= this.maxTeams; i++) {
      this.numberOfTeamsOptions.push(i);
    }

    this.numberOfTeams = this.minTeams;
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

  save() {
    console.log(this.teamEntrants);
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
  }
}
