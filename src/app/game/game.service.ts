import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from '../core/models/game';
import { GameRound } from '../core/models/game-round';
import { TeamRoundScore } from '../core/models/team-round-score';
import { Team } from '../core/models/teams';
import { GameTeamScore } from '../core/models/game-team-score';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _team1 = new Team('1', 'Chad', 1);
  private _team2 = new Team('2', 'Nancy', 2);
  private _games: Game[] = [];
  private _gameRounds: { [gameId: string]: GameRound[]; } = {};
  private _teamRoundScores: { [gameRoundId: string]: TeamRoundScore[]; } = {};
  private _gameNumber = 0;
  private _separator = '_';

  constructor() {
    const game = new Game('1', 1,
      [
        new GameTeamScore('1', '1', this._team1),
        new GameTeamScore('2', '2', this._team2)
      ],
      new Date(Date.now()),
      null);
    this.createGame(game);
  }

  public getGames(): Observable<Game[]> {
    return of(this._games);
  }

  public getGameById(id: string): Observable<Game> {
    return of(this._games.find(x => x.id === id));
  }

  public createGame(game: Game): Observable<Game> {
    game.number = ++this._gameNumber;
    game.id = game.number.toString();
    this._games.push(game);
    this.createRound(game);
    return of(game);
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

  public getGameRounds(id: string): Observable<GameRound[]> {
    return of(this._gameRounds[id]);
  }

  public getGameRoundById(gameId: string, id: string): Observable<GameRound> {
    let gameRound: GameRound = null;
    const getGameRounds$ = this.getGameRounds(gameId).subscribe(gameRounds => {
      if (gameRounds == null) { return; }
      gameRound = gameRounds.find(x => x.id === id);
    });
    getGameRounds$.unsubscribe();
    return of(gameRound);
  }

  public createRound(game: Game): Observable<GameRound> {
    if (this._gameRounds[game.id] == null) {
      this._gameRounds[game.id] = [];
    }

    const roundNumber = this._gameRounds[game.id].length + 1;
    const id = `${game.id}${this._separator}${roundNumber}`;
    const gameRound = new GameRound(id, game.id, roundNumber);
    gameRound.teamScores = game.teamScores.map((teamScore, index) =>
      new TeamRoundScore(`${id}${this._separator}${index}`, gameRound, teamScore.team, 0));

    this._gameRounds[game.id].push(gameRound);

    return of(gameRound);
  }

  public deleteRound(gameRound: GameRound): void {
    const gameId = gameRound.gameId;
    const getGame$ = this.getGameById(gameId).subscribe(game => {
      if (game == null) { return; }

      if (this._gameRounds[gameId] == null) { return; }

      const index = this._gameRounds[gameId].findIndex(x => x.id === gameRound.id);
      if (index < 0) { return; }

      this._gameRounds[gameId].splice(index, 1);
    });

    getGame$.unsubscribe();
  }

  public editRound(gameRound: GameRound): Observable<GameRound> {
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

  public createRoundTeamScore(teamRoundScore: TeamRoundScore): Observable<TeamRoundScore> {
    const gameRound = teamRoundScore.gameRound;

    if (gameRound == null) { return; }

    if (this._teamRoundScores[gameRound.id] == null) {
      this._teamRoundScores[gameRound.id] = [];
    }

    this._teamRoundScores[gameRound.id].push(teamRoundScore);

    return of(teamRoundScore);
  }

  public deleteRoundTeamScore(gameId: string, teamRoundScore: TeamRoundScore): void {
    this.gameRoundScoreAction(gameId, teamRoundScore, (gameRoundId, index) => this._teamRoundScores[gameRoundId].splice(index, 1));
  }

  public editRoundTeamScore(gameId: string, teamRoundScore: TeamRoundScore): Observable<TeamRoundScore> {
    this.gameRoundScoreAction(gameId, teamRoundScore, (gameRoundId, index) => this._teamRoundScores[gameRoundId][index] = teamRoundScore);
    return of(teamRoundScore);
  }

  private gameRoundScoreAction(gameId: string, teamRoundScore: TeamRoundScore, action: (gameRoundId, index) => {}): void {
    const getGameRoundById$ = this.getGameRoundById(gameId, teamRoundScore.gameRound.id).subscribe(gameRound => {
      if (gameRound == null) { return; }

      if (this._teamRoundScores[gameRound.id] == null) { return; }
      const index = this._teamRoundScores[gameRound.id].findIndex(x => x.id === teamRoundScore.id);
      if (index < 0) { return; }

      action(gameRound.id, index);
    });

    getGameRoundById$.unsubscribe();
  }
}
