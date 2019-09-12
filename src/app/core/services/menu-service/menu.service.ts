import { Injectable } from '@angular/core';
import { MenuData } from '../../models/menu-data';
import { RouterService } from 'src/app/routing/services/router-service/router.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuData: MenuData[] = [
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

  constructor(private _routerService: RouterService) { }

  getMenuData(): MenuData[] {
    return this.menuData;
  }
}
