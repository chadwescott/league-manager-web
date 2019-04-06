import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/modules/core/services/menu-service/menu.service';
import { MenuData } from 'src/app/modules/core/models/menu-data';

@Component({
  selector: 'lm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuData: MenuData[];

  constructor(private menuService: MenuService) {
    this.menuData = this.menuService.getMenuData();
   }

  ngOnInit() {
  }
}
