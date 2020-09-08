import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let PlayerListComponent = class PlayerListComponent {
    constructor() {
        this.playerSelected = new EventEmitter();
        this.displayedColumns = ['firstName', 'lastName', 'nickName'];
    }
    ngOnInit() {
    }
    selectPlayer(player) {
        this.playerSelected.emit(player);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], PlayerListComponent.prototype, "players", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], PlayerListComponent.prototype, "playerSelected", void 0);
PlayerListComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-player-list',
        templateUrl: './player-list.component.html',
        styleUrls: ['./player-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], PlayerListComponent);
export { PlayerListComponent };
//# sourceMappingURL=player-list.component.js.map