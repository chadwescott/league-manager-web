import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { League } from '../../core/models/league';
import { Player } from 'src/app/core/models/player';
let LeagueService = class LeagueService {
    constructor() {
        this._leagues = [
            new League('1', 'Perinton Rec Basketball'),
            new League('2', 'CooperVision Foosball'),
            new League('3', 'CooperVision Cornhole')
        ];
        this._players = [
            new Player('1', 'Chad', 'Wescott', 'Chadley', 'chadwescott@gmail.com')
        ];
    }
    getLeagues() {
        return of(this._leagues);
    }
    getLeaguePlayers(league) {
        return of(this._players);
    }
};
LeagueService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], LeagueService);
export { LeagueService };
//# sourceMappingURL=league.service.js.map