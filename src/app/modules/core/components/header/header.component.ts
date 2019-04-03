import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/modules/core/services/router-service/router.service';

@Component({
  selector: 'lm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public routerService: RouterService) {
  }

  ngOnInit() {
  }
}
