import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from '../core/models/game';
import { GameRound } from '../core/models/game-round';
import { TeamRoundScore } from '../core/models/team-round-score';
import { Team } from '../core/models/teams';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _games: Game[] = [
    new Game('1', 1, [ new Team('1', 'Chad', 1)], new Date(Date.now()))
  ];
  private _gameRounds: GameRound[] = [];
  private _teamRoundScores: TeamRoundScore[] = [];

  constructor() { }

  public getGames(): Observable<Game[]> {
    return of(this._games);
  }

  public createGame(game: Game) {
    this._games.push(game);
  }

  public deleteGame(game: Game): void {
    const index = this._games.findIndex(x => x.id === game.id);
    if (index < 0) { return; }
    this._games.splice(index, 1);
  }

  public editGame(game: Game): void {
    const index = this._games.findIndex(x => x.id === game.id);
    if (index < 0) { return; }
    this._games[index] = game;
  }

  public addRound(gameRound: GameRound): void {
    const index = this._games.findIndex(x => x.id === gameRound.gameId);
    if (index < 0) { return; }
    this._gameRounds.push(gameRound);
  }

  public deleteRound(gameRound: GameRound): void {
    const index = this._games.findIndex(x => x.id === gameRound.gameId);
    if (index < 0) { return; }
    this._gameRounds.splice(index, 1);
  }

  public editRound(gameRound: GameRound): void {
    const index = this._games.findIndex(x => x.id === gameRound.gameId);
    if (index < 0) { return; }
    this._gameRounds[index] = gameRound;
  }

  public addRoundTeamScore(teamRoundScore: TeamRoundScore): void {
    const index = this._gameRounds.findIndex(x => x.id === teamRoundScore.gameRoundId);
    if (index < 0) { return; }
    this._teamRoundScores.push(teamRoundScore);
  }

  public deleteRoundTeamScore(teamRoundScore: TeamRoundScore): void {
    const index = this._teamRoundScores.findIndex(x => x.id === teamRoundScore.id);
    if (index < 0) { return; }
    this._teamRoundScores.splice(index, 1);
  }

  public editRoundTeamScore(teamRoundScore: TeamRoundScore): void {
    const index = this._teamRoundScores.findIndex(x => x.id === teamRoundScore.id);
    if (index < 0) { return; }
    this._teamRoundScores[index] = teamRoundScore;
  }
}
