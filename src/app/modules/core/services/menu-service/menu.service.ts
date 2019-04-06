import { Injectable } from '@angular/core';
import { MenuData } from '../../models/menu-data';
import { RouterService } from '../router-service/router.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuData: MenuData[] = [
      new MenuData('My Leagues', 'fas fa-basketball-ball', () => this.routerService.showHome()),
      new MenuData('Schedule', 'far fa-calendar-alt', () => this.routerService.showHome()),
      new MenuData('Standings', 'fas fa-list-ol', () => this.routerService.showHome()),
      new MenuData('Participants', 'fas fa-user-friends', () => this.routerService.showHome()),
      new MenuData('Statistics', 'far fa-chart-bar', () => this.routerService.showHome()),
      new MenuData('Awards', 'fas fa-medal', () => this.routerService.showHome()),
    ];

  constructor(private routerService: RouterService) { }

  getMenuData(): MenuData[] {
    return this.menuData;
  }
}
