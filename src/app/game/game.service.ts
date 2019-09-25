import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { EnvService } from '../core/services/env.service';
import { HttpService } from '../core/services/http.service';

import { Game } from '../core/models/game';
import { Round } from '../core/models/round';
import { TeamRoundScore } from '../core/models/team-round-score';
import { TeamScoreEvent } from '../core/models/team-score-event';
import { GameTeamScore } from '../core/models/game-team-score';
import { ScoreSystem } from '../core/enums/score-system';
import { GameRequest } from '../core/requests/game-request';
import { Team } from '../core/models/teams';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _baseUrl: string;
  private _games: Game[] = [];
  private _gameRounds: { [gameId: string]: Round[]; } = {};
  private _gameScores: { [gameId: string]: TeamScoreEvent[]; } = {};
  private _separator = '_';

  constructor(private _httpService: HttpService, private _envService: EnvService) {
    this._baseUrl = this._envService.apiUrl;
  }

  public getGames(): Observable<Game[]> {
    return this._httpService.get<Game[]>(`${this._baseUrl}/games`);
  }

  public getGameById(id: string): Observable<Game> {
    return this._httpService.get<Game>(`${this._baseUrl}/games/${id}`);
  }

  public createGame(request: GameRequest): Observable<any> {
    return this._httpService.post<Game>(`${this._baseUrl}/games`, request);
  }

  public deleteGame(game: Game): void {
    const index = this._games.findIndex(x => x.id === game.id);
    if (index < 0) { return; }
    this._games.splice(index, 1);
  }

  public editGame(game: Game): Observable<Game> {
    const index = this._games.findIndex(x => x.id === game.id);
    if (index < 0) { return; }
    this._games[index] = game;
    return of(game);
  }

  public getGameTeams(id: string): Observable<Team[]> {
    return this._httpService.get<Team[]>(`${this._baseUrl}/games/${id}/teams`);
  }

  public getGameTeamScores(id: string): Observable<GameTeamScore[]> {
    return this._httpService.get<GameTeamScore[]>(`${this._baseUrl}/games/${id}/teamScores`);
  }

  public getGameRounds(id: string): Observable<Round[]> {
    return of(this._gameRounds[id]);
  }

  public getGameRoundById(gameId: string, id: string): Observable<Round> {
    let gameRound: Round = null;
    const getGameRounds$ = this.getGameRounds(gameId).subscribe(gameRounds => {
      if (gameRounds == null) { return; }
      gameRound = gameRounds.find(x => x.id === id);
    });
    getGameRounds$.unsubscribe();
    return of(gameRound);
  }

  public createRound(game: Game): Observable<Round> {
    return null;
  }

  public updateGameScores(game: Game): void {
    if (game.gameSettings.scoreSystem === ScoreSystem.Rounds) {
      this.updateGameScoresByRound(game);
    }
  }

  private updateGameScoresByRound(game: Game) {
  }

  private updateGameScoresAdHoc(game: Game) {
  }

  public deleteRound(gameRound: Round): Observable<boolean> {
    const gameId = gameRound.gameId;
    const getGame$ = this.getGameById(gameId).subscribe(game => {
      if (game == null) { return; }

      if (this._gameRounds[gameId] == null) { return; }

      const index = this._gameRounds[gameId].findIndex(x => x.id === gameRound.id);
      if (index < 0) { return; }

      this._gameRounds[gameId].splice(index, 1);
      this.updateRoundNumbers(this._gameRounds[gameId]);
      this.updateGameScores(game);
    });

    getGame$.unsubscribe();
    return of(true);
  }

  public editRound(gameRound: Round): Observable<Round> {
    const gameId = gameRound.gameId;
    const getGame$ = this.getGameById(gameId).subscribe(game => {
      if (game == null) { return; }

      if (this._gameRounds[gameId] == null) { return; }

      const index = this._gameRounds[gameId].findIndex(x => x.id === gameRound.id);
      if (index < 0) { return; }

      this._gameRounds[gameId][index] = gameRound;
    });

    getGame$.unsubscribe();
    return of(gameRound);
  }

  private updateRoundNumbers(rounds: Round[]): void {
    for (let i = 0; i < rounds.length; i++) {
      rounds[i].number = i + 1;
    }
  }
}
