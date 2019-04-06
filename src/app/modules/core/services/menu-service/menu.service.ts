import { Injectable } from '@angular/core';
import { MenuData } from '../../models/menu-data';
import { RouterService } from '../router-service/router.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuData: MenuData[] = [
      new MenuData('Machines', 'fas fa-cogs', () => this.routerService.showHome()),
    ];

  constructor(private routerService: RouterService) { }

  getMenuData(): MenuData[] {
    return this.menuData;
  }
}
