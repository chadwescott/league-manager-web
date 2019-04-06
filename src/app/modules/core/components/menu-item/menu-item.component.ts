import { Component, OnInit, Input } from '@angular/core';
import { RouterService } from 'src/app/modules/core/services/router-service/router.service';
import { MenuData } from 'src/app/modules/core/models/menu-data';

@Component({
  selector: 'lm-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menuData: MenuData;

  constructor(public routerService: RouterService) { }

  ngOnInit() {
  }
}
