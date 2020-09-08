import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { COLORS } from 'src/app/core/constants/colors';
import { HIGHLIGHT_TIMING } from 'src/app/core/constants/timings';
import { HIGHLIGHT_ANIMATION } from 'src/app/core/constants/animations';
let WildCardIndicatorComponent = class WildCardIndicatorComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], WildCardIndicatorComponent.prototype, "wildCard", void 0);
WildCardIndicatorComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-wild-card-indicator',
        templateUrl: './wild-card-indicator.component.html',
        styleUrls: ['./wild-card-indicator.component.scss'],
        animations: [
            trigger('wildCardChanged', [
                transition('* => *', [
                    useAnimation(HIGHLIGHT_ANIMATION, {
                        params: { timings: HIGHLIGHT_TIMING, highlightColor: COLORS.HIGHLIGHT_COLOR }
                    })
                ])
            ])
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], WildCardIndicatorComponent);
export { WildCardIndicatorComponent };
//# sourceMappingURL=wild-card-indicator.component.js.map