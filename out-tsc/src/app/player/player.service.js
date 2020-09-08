import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Player } from '../core/models/player';
let PlayerService = class PlayerService {
    constructor() {
        this._players = [
            new Player('1', 'Chad', 'Wescott', 'Chad', 'chadwescott@gmail.com'),
            new Player('2', 'Nancy', 'Wescott', 'Nancy', 'nancywescott@gmail.com')
        ];
    }
    getPlayers() {
        return this._players;
    }
    getPlayerById(playerId) {
        return this._players.find(x => x.id === playerId);
    }
    getPlayersByTeam(teamId) {
        return this._players;
    }
};
PlayerService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], PlayerService);
export { PlayerService };
//# sourceMappingURL=player.service.js.map