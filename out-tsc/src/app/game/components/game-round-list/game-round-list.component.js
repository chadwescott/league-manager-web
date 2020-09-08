import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { MatTable } from '@angular/material';
import { Game } from 'src/app/core/models/game';
import { trigger, transition, useAnimation, query, animate, style } from '@angular/animations';
import { SCALE_IN_VERTICAL_ANIMATION, SCALE_OUT_VERTICAL_ANIMATION } from 'src/app/core/constants/animations';
import { SCALE_IN_OUT_TIMING } from 'src/app/core/constants/timings';
let GameRoundListComponent = class GameRoundListComponent {
    constructor() {
        this.roundLabel = 'Round';
        this.rounds = [];
        this.addRound = new EventEmitter();
        this.editRound = new EventEmitter();
        this.deleteRound = new EventEmitter();
        this.displayedColumns = ['round', 'actions'];
    }
    ngOnInit() {
        this.teams = this.game.teamScores.map(x => x.team);
        for (let i = 0; i < this.game.teamScores.length; i++) {
            this.displayedColumns.splice(this.displayedColumns.length - 1, 0, this.game.teamScores[i].team.id);
        }
    }
    ngAfterViewInit() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
    }
    updateRounds() {
        this.table.renderRows();
    }
    onAddRound() {
        this.addRound.emit();
        this.scrollToBottom();
    }
    onEditRound(round) {
        this.editRound.emit(round);
    }
    onDeleteRound(round) {
        this.deleteRound.emit(round);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Game)
], GameRoundListComponent.prototype, "game", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], GameRoundListComponent.prototype, "roundLabel", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], GameRoundListComponent.prototype, "rounds", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], GameRoundListComponent.prototype, "addRound", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], GameRoundListComponent.prototype, "editRound", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], GameRoundListComponent.prototype, "deleteRound", void 0);
tslib_1.__decorate([
    ViewChild(MatTable, { static: true }),
    tslib_1.__metadata("design:type", MatTable)
], GameRoundListComponent.prototype, "table", void 0);
tslib_1.__decorate([
    ViewChild('container', { static: true }),
    tslib_1.__metadata("design:type", ElementRef)
], GameRoundListComponent.prototype, "container", void 0);
GameRoundListComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-game-round-list',
        templateUrl: './game-round-list.component.html',
        styleUrls: ['./game-round-list.component.scss'],
        animations: [
            trigger('roundsChanged', [
                transition('* => *', [
                    query(':enter', [
                        useAnimation(SCALE_IN_VERTICAL_ANIMATION, {
                            params: { timings: SCALE_IN_OUT_TIMING }
                        })
                    ], { optional: true }),
                    query(':leave', [
                        useAnimation(SCALE_OUT_VERTICAL_ANIMATION, {
                            params: { timings: SCALE_IN_OUT_TIMING }
                        })
                    ], { optional: true })
                ])
            ]),
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
], GameRoundListComponent);
export { GameRoundListComponent };
//# sourceMappingURL=game-round-list.component.js.map