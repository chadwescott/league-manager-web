import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let GameListComponent = class GameListComponent {
    constructor() {
        this.selectedGame = new EventEmitter();
        this.displayedColumns = ['star', 'number', 'startTime'];
    }
    ngOnInit() {
    }
    selectGame(game) {
        this.selectedGame.emit(game);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], GameListComponent.prototype, "games", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], GameListComponent.prototype, "selectedGame", void 0);
GameListComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-game-list',
        templateUrl: './game-list.component.html',
        styleUrls: ['./game-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], GameListComponent);
export { GameListComponent };
//# sourceMappingURL=game-list.component.js.map