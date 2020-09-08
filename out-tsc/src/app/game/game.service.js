import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { EnvService } from '../core/services/env.service';
import { HttpService } from '../core/services/http.service';
import { Round } from '../core/models/round';
import { TeamRoundScore } from '../core/models/team-round-score';
import { TeamScore } from '../core/models/team-score';
import { GameSettings } from '../core/models/game-settings';
import { ScoreSystem } from '../core/enums/score-system';
import { WinCondition } from '../core/enums/win-condition';
import { GameRequest } from '../core/requests/game-request';
let GameService = class GameService {
    constructor(_httpService, _envService) {
        this._httpService = _httpService;
        this._envService = _envService;
        this._games = [];
        this._gameRounds = {};
        this._gameScores = {};
        this._gameNumber = 0;
        this._separator = '_';
        // private _gameSettings: GameSettings = new GameSettings(2, 5, ScoreSystem.Rounds, WinCondition.ScoreLimit);
        this._gameSettings = new GameSettings(2, 5, ScoreSystem.AdHoc, WinCondition.ScoreLimit);
        this._baseUrl = this._envService.apiUrl;
    }
    getGames() {
        return of(this._games);
    }
    getGameById(id) {
        return of(this._games.find(x => x.id === id));
    }
    createGame(game) {
        const request = new GameRequest(game);
        console.log(request);
        return this._httpService.post(`${this._baseUrl}/games`, request);
    }
    deleteGame(game) {
        const index = this._games.findIndex(x => x.id === game.id);
        if (index < 0) {
            return;
        }
        this._games.splice(index, 1);
    }
    editGame(game) {
        const index = this._games.findIndex(x => x.id === game.id);
        if (index < 0) {
            return;
        }
        this._games[index] = game;
        return of(game);
    }
    getGameRounds(id) {
        return of(this._gameRounds[id]);
    }
    getGameRoundById(gameId, id) {
        let gameRound = null;
        const getGameRounds$ = this.getGameRounds(gameId).subscribe(gameRounds => {
            if (gameRounds == null) {
                return;
            }
            gameRound = gameRounds.find(x => x.id === id);
        });
        getGameRounds$.unsubscribe();
        return of(gameRound);
    }
    createRound(game) {
        if (this._gameRounds[game.id] == null) {
            this._gameRounds[game.id] = [];
        }
        const roundNumber = this._gameRounds[game.id].length + 1;
        const id = `${game.id}${this._separator}${roundNumber}`;
        const gameRound = new Round(id, game.id, roundNumber);
        gameRound.teamScores = game.teamScores.map((teamScore, index) => new TeamRoundScore(`${id}${this._separator}${index}`, teamScore.team, 0));
        this._gameRounds[game.id].push(gameRound);
        return of(gameRound);
    }
    updateGameScores(game) {
        if (game.gameSettings.scoreSystem === ScoreSystem.Rounds) {
            this.updateGameScoresByRound(game);
        }
    }
    updateGameScoresByRound(game) {
        const rounds = this._gameRounds[game.id];
        const teamScores = game.teamScores.map(x => new TeamScore(x.id, game.id, x.team));
        for (let i = 0; i < rounds.length; i++) {
            for (let j = 0; j < rounds[i].teamScores.length; j++) {
                teamScores[j].score += Number(rounds[i].teamScores[j].score);
            }
        }
        for (let i = 0; i < teamScores.length; i++) {
            game.teamScores[i].score = teamScores[i].score;
        }
    }
    updateGameScoresAdHoc(game) {
        const scores = this._gameScores[game.id];
        const teamScores = game.teamScores.map(x => new TeamScore(x.id, game.id, x.team));
        for (let i = 0; i < scores.length; i++) {
            const teamScore = teamScores.find(x => x.team === scores[i].team);
            teamScore.score += scores[i].score;
        }
        for (let i = 0; i < teamScores.length; i++) {
            game.teamScores[i].score = teamScores[i].score;
        }
    }
    deleteRound(gameRound) {
        const gameId = gameRound.gameId;
        const getGame$ = this.getGameById(gameId).subscribe(game => {
            if (game == null) {
                return;
            }
            if (this._gameRounds[gameId] == null) {
                return;
            }
            const index = this._gameRounds[gameId].findIndex(x => x.id === gameRound.id);
            if (index < 0) {
                return;
            }
            this._gameRounds[gameId].splice(index, 1);
            this.updateRoundNumbers(this._gameRounds[gameId]);
            this.updateGameScores(game);
        });
        getGame$.unsubscribe();
        return of(true);
    }
    editRound(gameRound) {
        const gameId = gameRound.gameId;
        const getGame$ = this.getGameById(gameId).subscribe(game => {
            if (game == null) {
                return;
            }
            if (this._gameRounds[gameId] == null) {
                return;
            }
            const index = this._gameRounds[gameId].findIndex(x => x.id === gameRound.id);
            if (index < 0) {
                return;
            }
            this._gameRounds[gameId][index] = gameRound;
        });
        getGame$.unsubscribe();
        return of(gameRound);
    }
    updateRoundNumbers(rounds) {
        for (let i = 0; i < rounds.length; i++) {
            rounds[i].number = i + 1;
        }
    }
};
GameService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpService, EnvService])
], GameService);
export { GameService };
//# sourceMappingURL=game.service.js.map