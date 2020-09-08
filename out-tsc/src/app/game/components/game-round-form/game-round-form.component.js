import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ViewChildren } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { Round } from 'src/app/core/models/round';
import { FADE_IN_OUT_TIMING } from 'src/app/core/constants/timings';
import { FADE_RIGHT_ANIMATION, FADE_LEFT_ANIMATION } from 'src/app/core/constants/animations';
let GameRoundFormComponent = class GameRoundFormComponent {
    constructor() {
        this.roundLabel = 'Round';
        this.scoreChanged = new EventEmitter();
        this.scoreEntered = new EventEmitter();
        this.loadFirstRound = new EventEmitter();
        this.loadNextRound = new EventEmitter();
        this.loadPreviousRound = new EventEmitter();
        this.loadLastRound = new EventEmitter();
    }
    ngOnInit() { }
    ngAfterViewInit() {
        setTimeout(() => this.scoreInputs.first.nativeElement.select(), 100);
    }
    ngOnChanges(changes) {
        const round = changes.round;
        if (round.currentValue !== round.previousValue && this.scoreInputs) {
            setTimeout(() => this.scoreInputs.first.nativeElement.select(), 100);
        }
    }
    onScoreChanged() {
        this.scoreChanged.emit();
    }
    onKeyup(event) {
        switch (event.key) {
            case 'Enter':
                this.scoreEntered.emit();
                break;
            case 'ArrowUp':
                if (event.ctrlKey) {
                    this.loadFirstRound.emit();
                }
                break;
            case 'ArrowLeft':
                if (event.ctrlKey) {
                    this.loadPreviousRound.emit();
                }
                break;
            case 'ArrowRight':
                if (event.ctrlKey) {
                    this.loadNextRound.emit();
                }
                break;
            case 'ArrowDown':
                if (event.ctrlKey) {
                    this.loadLastRound.emit();
                }
                break;
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], GameRoundFormComponent.prototype, "roundLabel", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Round)
], GameRoundFormComponent.prototype, "round", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], GameRoundFormComponent.prototype, "scoreChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], GameRoundFormComponent.prototype, "scoreEntered", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], GameRoundFormComponent.prototype, "loadFirstRound", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], GameRoundFormComponent.prototype, "loadNextRound", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], GameRoundFormComponent.prototype, "loadPreviousRound", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], GameRoundFormComponent.prototype, "loadLastRound", void 0);
tslib_1.__decorate([
    ViewChildren('score'),
    tslib_1.__metadata("design:type", Object)
], GameRoundFormComponent.prototype, "scoreInputs", void 0);
GameRoundFormComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-game-round-form',
        templateUrl: './game-round-form.component.html',
        styleUrls: ['./game-round-form.component.scss'],
        animations: [
            trigger('roundChanged', [
                transition(':increment', [
                    useAnimation(FADE_RIGHT_ANIMATION, {
                        params: { timings: FADE_IN_OUT_TIMING }
                    })
                ]),
                transition(':decrement', [
                    useAnimation(FADE_LEFT_ANIMATION, {
                        params: { timings: FADE_IN_OUT_TIMING }
                    })
                ])
            ])
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], GameRoundFormComponent);
export { GameRoundFormComponent };
//# sourceMappingURL=game-round-form.component.js.map