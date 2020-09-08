import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { SCALE_IN_OUT_TIMING } from 'src/app/core/constants/timings';
let GameScoreSummaryComponent = class GameScoreSummaryComponent {
    constructor() {
        this.displayedColumns = ['team', 'score'];
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], GameScoreSummaryComponent.prototype, "teamScores", void 0);
GameScoreSummaryComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-game-score-summary',
        templateUrl: './game-score-summary.component.html',
        styleUrls: ['./game-score-summary.component.scss'],
        animations: [
            trigger('scoreChanged', [
                transition(':increment', [
                    animate(SCALE_IN_OUT_TIMING, style({ background: 'yellow', color: 'black' }))
                ]),
                transition(':decrement', [
                    animate(SCALE_IN_OUT_TIMING, style({ background: 'yellow', color: 'red' }))
                ])
            ])
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], GameScoreSummaryComponent);
export { GameScoreSummaryComponent };
//# sourceMappingURL=game-score-summary.component.js.map