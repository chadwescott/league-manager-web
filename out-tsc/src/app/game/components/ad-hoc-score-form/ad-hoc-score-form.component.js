import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TeamScoreEvent } from 'src/app/core/models/team-score-event';
let AdHocScoreFormComponent = class AdHocScoreFormComponent {
    constructor() {
        this.teamScore = new EventEmitter();
        this.score = 0;
    }
    ngOnInit() {
    }
    onAddTeamScore(teamScore) {
        const event = new TeamScoreEvent(teamScore.team, this.score, new Date(Date.now()));
        this.teamScore.emit(event);
        this.score = 0;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], AdHocScoreFormComponent.prototype, "teamScores", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], AdHocScoreFormComponent.prototype, "teamScore", void 0);
AdHocScoreFormComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-ad-hoc-score-form',
        templateUrl: './ad-hoc-score-form.component.html',
        styleUrls: ['./ad-hoc-score-form.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AdHocScoreFormComponent);
export { AdHocScoreFormComponent };
//# sourceMappingURL=ad-hoc-score-form.component.js.map