import { Component, OnInit } from '@angular/core';
import { RouterService } from '../../../routing/services/router-service/router.service';
import { MenuService } from '../../services/menu-service/menu.service';
import { MenuData } from '../../models/menu-data';

@Component({
  selector: 'lm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuData: MenuData[];

  constructor(public routerService: RouterService, menuService: MenuService) {
    this.menuData = menuService.getMenuData();
  }

  ngOnInit() {
  }
}
