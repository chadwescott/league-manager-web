import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { RouterService } from 'src/app/routing/services/router-service/router.service';
import { GameService } from '../../game.service';
import { GameRoundListComponent } from '../../components/game-round-list/game-round-list.component';
import { ScoreSystem } from 'src/app/core/enums/score-system';
import { ScoreByRoundChartComponent } from '../../components/score-by-round-chart/score-by-round-chart.component';
import { FADE_IN_ANIMATION, FADE_OUT_ANIMATION } from 'src/app/core/constants/animations';
import { FADE_IN_OUT_TIMING } from 'src/app/core/constants/timings';
let GameDetailsComponent = class GameDetailsComponent {
    constructor(_gameService, _route, _routerService) {
        this._gameService = _gameService;
        this._route = _route;
        this._routerService = _routerService;
        this.ScoreSystem = ScoreSystem;
    }
    ngOnInit() {
        this._routeParams$ = this._route.params.subscribe(params => this.loadGame(params.gameId));
    }
    ngOnDestroy() {
        if (this._routeParams$) {
            this._routeParams$.unsubscribe();
        }
        if (this._loadGame$) {
            this._loadGame$.unsubscribe();
        }
    }
    loadGame(id) {
        this._loadGame$ = this._gameService.getGameById(id).subscribe(game => {
            if (game == null) {
                this._routerService.showGames();
                return;
            }
            this.game = game;
        });
    }
    onClose() {
        this._routerService.showGames();
    }
};
tslib_1.__decorate([
    ViewChild(GameRoundListComponent, { static: false }),
    tslib_1.__metadata("design:type", GameRoundListComponent)
], GameDetailsComponent.prototype, "gameRoundList", void 0);
tslib_1.__decorate([
    ViewChild(ScoreByRoundChartComponent, { static: false }),
    tslib_1.__metadata("design:type", ScoreByRoundChartComponent)
], GameDetailsComponent.prototype, "scoreByRoundChart", void 0);
GameDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-game-details',
        templateUrl: './game-details.component.html',
        styleUrls: ['./game-details.component.scss'],
        animations: [
            trigger('gameChanged', [
                transition(':enter', [
                    useAnimation(FADE_IN_ANIMATION, {
                        params: { timings: FADE_IN_OUT_TIMING }
                    })
                ]),
                transition(':leave', [
                    useAnimation(FADE_OUT_ANIMATION, {
                        params: { timings: FADE_IN_OUT_TIMING }
                    })
                ])
            ])
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [GameService,
        ActivatedRoute,
        RouterService])
], GameDetailsComponent);
export { GameDetailsComponent };
//# sourceMappingURL=game-details.component.js.map