import { Component, OnInit } from '@angular/core';
import { MenuData } from '../../models/menu-data';
import { MenuService } from '../../services/menu-service/menu.service';

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
