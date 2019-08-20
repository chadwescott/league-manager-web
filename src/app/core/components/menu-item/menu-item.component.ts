import { Component, OnInit, Input } from '@angular/core';
import { MenuData } from '../../models/menu-data';

@Component({
  selector: 'lm-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menuData: MenuData;

  constructor() { }

  ngOnInit() {
  }
}
