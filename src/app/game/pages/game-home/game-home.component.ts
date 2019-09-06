import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from '../../game.service';
import { Game } from 'src/app/core/models/game';
import { Team } from 'src/app/core/models/teams';
import { TeamService } from 'src/app/team/team.service';
import { GameListComponent } from '../../components/game-list/game-list.component';

@Component({
  selector: 'lm-game-home',
  templateUrl: './game-home.component.html',
  styleUrls: ['./game-home.component.scss']
})
export class GameHomeComponent implements OnInit, OnDestroy {
  @ViewChild(GameListComponent, { static: true }) gameList: GameListComponent;

  public games: Game[];
  public selectedGame: Game;
  public teams: Team[];

  private _getGames$: Subscription;
  private _getTeams$: Subscription;

  constructor(
    private _gameService: GameService,
    private _teamService: TeamService) { }

  ngOnInit() {
    this._getGames$ = this._gameService.getGames().subscribe(x => this.games = x);
    this._getTeams$ = this._teamService.getTeams().subscribe(x => this.teams = x);
  }

  ngOnDestroy() {
    if (this._getGames$) { this._getGames$.unsubscribe(); }
    if (this._getTeams$) { this._getTeams$.unsubscribe(); }
  }

  public gameSelected(game: Game): void {
    this.selectedGame = game;
  }

  saveGame(game: Game) {
    const createGame$ = this._gameService.createGame(game).subscribe(x => {
      console.log(this.games);
      this.gameList.update();
    });
    createGame$.unsubscribe();
  }
}
