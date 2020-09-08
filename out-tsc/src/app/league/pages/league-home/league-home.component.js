import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LeagueService } from '../../services/league.service';
let LeagueHomeComponent = class LeagueHomeComponent {
    constructor(_leagueService) {
        this._leagueService = _leagueService;
        this._leagues$ = this._leagueService.getLeagues().subscribe(x => this.leagues = x);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this._leagues$) {
            this._leagues$.unsubscribe();
        }
        if (this._getPlayers$) {
            this._getPlayers$.unsubscribe();
        }
    }
    leagueSelected(league) {
        this.selectedLeague = league;
        this._getPlayers$ = this._leagueService.getLeaguePlayers(league).subscribe(x => this.leaguePlayers = x);
    }
    clearSelectedLeague() {
        this.selectedLeague = null;
    }
};
LeagueHomeComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-league-home',
        templateUrl: './league-home.component.html',
        styleUrls: ['./league-home.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [LeagueService])
], LeagueHomeComponent);
export { LeagueHomeComponent };
//# sourceMappingURL=league-home.component.js.map