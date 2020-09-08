import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Team } from '../core/models/teams';
import { HttpService } from '../core/services/http.service';
import { EnvService } from '../core/services/env.service';
let TeamService = class TeamService {
    constructor(_httpService, _envService) {
        this._httpService = _httpService;
        this._envService = _envService;
        this._teams = [
            new Team('1', 'Chad'),
            new Team('2', 'Nancy'),
            new Team('3', 'Molly'),
            new Team('4', 'Elizabeth'),
            new Team('5', 'Annabelle'),
        ];
        this._baseUrl = this._envService.apiUrl;
    }
    getTeams() {
        return this._httpService.get(`${this._baseUrl}/teams`);
    }
};
TeamService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpService, EnvService])
], TeamService);
export { TeamService };
//# sourceMappingURL=team.service.js.map