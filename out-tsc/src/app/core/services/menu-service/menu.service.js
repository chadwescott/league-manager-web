import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { MenuData } from '../../models/menu-data';
import { RouterService } from 'src/app/routing/services/router-service/router.service';
let MenuService = class MenuService {
    constructor(_routerService) {
        this._routerService = _routerService;
        this.menuData = [
            new MenuData('My Leagues', 'fas fa-clipboard-list', () => this._routerService.showLeagues()),
            new MenuData('Games', 'fas fa-chess', () => this._routerService.showGames()),
            new MenuData('Schedule', 'far fa-calendar-alt', () => this._routerService.showHome()),
            new MenuData('Standings', 'fas fa-list-ol', () => this._routerService.showHome()),
            new MenuData('Participants', 'fas fa-user-friends', () => this._routerService.showHome()),
            new MenuData('Statistics', 'far fa-chart-bar', () => this._routerService.showHome()),
            new MenuData('Awards', 'fas fa-medal', () => this._routerService.showHome()),
            new MenuData('Tournaments', 'fas fa-sitemap', () => this._routerService.showHome()),
            new MenuData('Adminstration', 'fas fa-cogs', () => this._routerService.showAdministration())
        ];
    }
    getMenuData() {
        return this.menuData;
    }
};
MenuService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [RouterService])
], MenuService);
export { MenuService };
//# sourceMappingURL=menu.service.js.map