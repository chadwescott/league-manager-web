import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from 'src/app/core/models/game';
import { TeamScore } from 'src/app/core/models/team-score';
import { GameSettings } from 'src/app/core/models/game-settings';
let GameFormComponent = class GameFormComponent {
    constructor() {
        this.gameSaved = new EventEmitter();
        this.cancelled = new EventEmitter();
        this.numberOfTeamsOptions = [];
        this.teamNumbers = [];
        this.teamEntrants = [];
    }
    ngOnInit() {
        for (let i = this.gameSettings.minTeams; i <= this.gameSettings.maxTeams; i++) {
            this.numberOfTeamsOptions.push(i);
        }
        this.numberOfTeams = this.gameSettings.minTeams;
        this.numberOfTeamsChanged();
    }
    numberOfTeamsChanged() {
        while (this.numberOfTeams > this.teamEntrants.length) {
            this.teamEntrants.push(null);
            this.teamNumbers.push(null);
        }
        while (this.numberOfTeams < this.teamEntrants.length) {
            this.teamEntrants.pop();
            this.teamNumbers.pop();
        }
    }
    onSave() {
        this.errorMessage = null;
        for (let i = 0; i < this.teamEntrants.length; i++) {
            if (this.teamEntrants[i] == null) {
                this.errorMessage = 'All teams are required';
                return;
            }
            if (this.teamEntrants.lastIndexOf(this.teamEntrants[i]) !== i) {
                this.errorMessage = 'All teams must be unique';
                return;
            }
        }
        const teamScores = this.teamEntrants.map(x => new TeamScore('', '', x));
        const game = new Game('', 0, teamScores, new Date(Date.now()), this.gameSettings);
        this.gameSaved.emit(game);
    }
    onCancel() {
        this.cancelled.emit();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", GameSettings)
], GameFormComponent.prototype, "gameSettings", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], GameFormComponent.prototype, "teams", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], GameFormComponent.prototype, "gameSaved", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], GameFormComponent.prototype, "cancelled", void 0);
GameFormComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-game-form',
        templateUrl: './game-form.component.html',
        styleUrls: ['./game-form.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], GameFormComponent);
export { GameFormComponent };
//# sourceMappingURL=game-form.component.js.map