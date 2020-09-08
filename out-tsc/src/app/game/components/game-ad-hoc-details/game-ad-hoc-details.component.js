import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Game } from 'src/app/core/models/game';
import { trigger, transition, useAnimation } from '@angular/animations';
import { FADE_IN_ANIMATION, FADE_OUT_ANIMATION } from 'src/app/core/constants/animations';
import { FADE_IN_OUT_TIMING } from 'src/app/core/constants/timings';
let GameAdHocDetailsComponent = class GameAdHocDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Game)
], GameAdHocDetailsComponent.prototype, "game", void 0);
GameAdHocDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-game-ad-hoc-details',
        templateUrl: './game-ad-hoc-details.component.html',
        styleUrls: ['./game-ad-hoc-details.component.scss'],
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
    tslib_1.__metadata("design:paramtypes", [])
], GameAdHocDetailsComponent);
export { GameAdHocDetailsComponent };
//# sourceMappingURL=game-ad-hoc-details.component.js.map