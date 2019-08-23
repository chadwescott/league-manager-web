import { Component, OnInit, Input } from '@angular/core';
import { MenuData } from '../../models/menu-data';

@Component({
  selector: 'lm-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {
  @Input() menuData: MenuData;

  constructor() { }

  ngOnInit() {
  }
}
