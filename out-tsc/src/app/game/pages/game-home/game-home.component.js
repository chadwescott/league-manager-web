import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GameService } from '../../game.service';
import { TeamService } from 'src/app/team/team.service';
import { RouterService } from 'src/app/routing/services/router-service/router.service';
import { GameSettings } from 'src/app/core/models/game-settings';
import { ScoreSystem } from 'src/app/core/enums/score-system';
import { WinCondition } from 'src/app/core/enums/win-condition';
let GameHomeComponent = class GameHomeComponent {
    constructor(_gameService, _teamService, _routerService) {
        this._gameService = _gameService;
        this._teamService = _teamService;
        this._routerService = _routerService;
        this.gameSettings = new GameSettings(2, 5, ScoreSystem.Rounds, WinCondition.ScoreLimit);
        this.showForm = false;
    }
    ngOnInit() {
        this._getGames$ = this._gameService.getGames().subscribe(x => this.games = x);
        this._getTeams$ = this._teamService.getTeams().subscribe(x => this.teams = x);
    }
    ngOnDestroy() {
        if (this._getGames$) {
            this._getGames$.unsubscribe();
        }
        if (this._getTeams$) {
            this._getTeams$.unsubscribe();
        }
    }
    gameSelected(game) {
        this._routerService.showGame(game.id);
    }
    saveGame(game) {
        const createGame$ = this._gameService.createGame(game).subscribe(x => {
            this.showForm = false;
        });
        createGame$.unsubscribe();
    }
    onCreateGameCancelled() {
        this.showForm = false;
    }
};
GameHomeComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-game-home',
        templateUrl: './game-home.component.html',
        styleUrls: ['./game-home.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [GameService,
        TeamService,
        RouterService])
], GameHomeComponent);
export { GameHomeComponent };
//# sourceMappingURL=game-home.component.js.map