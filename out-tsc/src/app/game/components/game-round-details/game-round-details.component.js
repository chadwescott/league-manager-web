import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { FADE_IN_ANIMATION, FADE_OUT_ANIMATION } from 'src/app/core/constants/animations';
import { FADE_IN_OUT_TIMING } from 'src/app/core/constants/timings';
import { Game } from 'src/app/core/models/game';
import { GameRoundListComponent } from '../game-round-list/game-round-list.component';
import { ScoreByRoundChartComponent } from '../score-by-round-chart/score-by-round-chart.component';
import { GameService } from '../../game.service';
let GameRoundDetailsComponent = class GameRoundDetailsComponent {
    constructor(_gameService) {
        this._gameService = _gameService;
        this.roundLabel = 'Hand';
        this.cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    }
    ngOnInit() {
        this.teams = this.game.teamScores.map(ts => ts.team);
        this.updateRounds();
    }
    onAddRound() {
        this._gameService.createRound(this.game).subscribe(x => {
            this.selectedRound = x;
            this.updateRounds();
            this.gameRoundList.scrollToBottom();
        });
    }
    updateRounds() {
        this._gameService.getGameRounds(this.game.id).subscribe(rounds => {
            this.rounds = rounds;
            if (this.rounds && this.rounds.length > 0 && !this.selectedRound) {
                this.selectedRound = this.rounds[this.rounds.length - 1];
            }
            this.updateWildCard();
            if (this.gameRoundList) {
                this.gameRoundList.updateRounds();
            }
            if (this.scoreByRoundChart) {
                this.scoreByRoundChart.initializeChartData();
            }
        });
    }
    onScoreChanged() {
        this._gameService.updateGameScores(this.game);
        if (this.scoreByRoundChart) {
            this.scoreByRoundChart.initializeChartData();
        }
    }
    onEditRound(round) {
        this.selectedRound = round;
    }
    onDeleteRound(round) {
        if (this.selectedRound === round) {
            this.selectedRound = null;
        }
        this._gameService.deleteRound(round).subscribe(() => this.updateRounds());
    }
    updateWildCard() {
        this.wildCard = this.cards[(this.rounds.length - 1) % this.cards.length];
    }
    onFirstRound() {
        if (this.rounds && this.rounds.length > 0) {
            this.selectedRound = this.rounds[0];
        }
    }
    onPreviousRound() {
        if (this.rounds && this.rounds.length > 0) {
            const index = this.rounds.indexOf(this.selectedRound);
            if (index > 0) {
                this.selectedRound = this.rounds[index - 1];
            }
        }
    }
    onNextRound() {
        if (this.rounds && this.rounds.length > 0) {
            const index = this.rounds.indexOf(this.selectedRound);
            if (index < this.rounds.length - 1) {
                this.selectedRound = this.rounds[index + 1];
            }
        }
    }
    onLastRound() {
        if (this.rounds && this.rounds.length > 0) {
            this.selectedRound = this.rounds[this.rounds.length - 1];
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Game)
], GameRoundDetailsComponent.prototype, "game", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], GameRoundDetailsComponent.prototype, "rounds", void 0);
tslib_1.__decorate([
    ViewChild(GameRoundListComponent, { static: false }),
    tslib_1.__metadata("design:type", GameRoundListComponent)
], GameRoundDetailsComponent.prototype, "gameRoundList", void 0);
tslib_1.__decorate([
    ViewChild(ScoreByRoundChartComponent, { static: false }),
    tslib_1.__metadata("design:type", ScoreByRoundChartComponent)
], GameRoundDetailsComponent.prototype, "scoreByRoundChart", void 0);
GameRoundDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-game-round-details',
        templateUrl: './game-round-details.component.html',
        styleUrls: ['./game-round-details.component.scss'],
        animations: [
            trigger('roundChanged', [
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
            ]),
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
    tslib_1.__metadata("design:paramtypes", [GameService])
], GameRoundDetailsComponent);
export { GameRoundDetailsComponent };
//# sourceMappingURL=game-round-details.component.js.map