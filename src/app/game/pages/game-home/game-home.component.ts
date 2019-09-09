import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from '../../game.service';
import { Game } from 'src/app/core/models/game';
import { Team } from 'src/app/core/models/teams';
import { TeamService } from 'src/app/team/team.service';
import { RouterService } from 'src/app/routing/services/router-service/router.service';

@Component({
  selector: 'lm-game-home',
  templateUrl: './game-home.component.html',
  styleUrls: ['./game-home.component.scss']
})
export class GameHomeComponent implements OnInit, OnDestroy {
  public games: Game[];
  public teams: Team[];

  private _getGames$: Subscription;
  private _getTeams$: Subscription;

  showForm = false;

  constructor(
    private _gameService: GameService,
    private _teamService: TeamService,
    private _routerService: RouterService) { }

  ngOnInit() {
    this._getGames$ = this._gameService.getGames().subscribe(x => this.games = x);
    this._getTeams$ = this._teamService.getTeams().subscribe(x => this.teams = x);
  }

  ngOnDestroy() {
    if (this._getGames$) { this._getGames$.unsubscribe(); }
    if (this._getTeams$) { this._getTeams$.unsubscribe(); }
  }

  public gameSelected(game: Game): void {
    this._routerService.showGame(game.id);
  }

  saveGame(game: Game) {
    const createGame$ = this._gameService.createGame(game).subscribe(x => {
      this.showForm = false;
    });
    createGame$.unsubscribe();
  }

  onCreateGameCancelled() {
    this.showForm = false;
  }
}
