import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let LeagueListComponent = class LeagueListComponent {
    constructor() {
        this.selectedLeague = new EventEmitter();
        this.displayedColumns = ['star', 'name'];
    }
    ngOnInit() {
    }
    selectLeague(league) {
        this.selectedLeague.emit(league);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], LeagueListComponent.prototype, "leagues", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], LeagueListComponent.prototype, "selectedLeague", void 0);
LeagueListComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-league-list',
        templateUrl: './league-list.component.html',
        styleUrls: ['./league-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], LeagueListComponent);
export { LeagueListComponent };
//# sourceMappingURL=league-list.component.js.map