import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { League } from '../../../core/models/league';
let LeagueDetailsComponent = class LeagueDetailsComponent {
    constructor() {
        this.leagueClosed = new EventEmitter();
    }
    ngOnInit() {
    }
    close() {
        this.leagueClosed.emit();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", League)
], LeagueDetailsComponent.prototype, "league", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], LeagueDetailsComponent.prototype, "leagueClosed", void 0);
LeagueDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-league-details',
        templateUrl: './league-details.component.html',
        styleUrls: ['./league-details.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], LeagueDetailsComponent);
export { LeagueDetailsComponent };
//# sourceMappingURL=league-details.component.js.map