import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RouterService } from '../../../routing/services/router-service/router.service';
import { MenuService } from '../../services/menu-service/menu.service';
let HeaderComponent = class HeaderComponent {
    constructor(routerService, menuService) {
        this.routerService = routerService;
        this.menuData = menuService.getMenuData();
    }
    ngOnInit() {
    }
};
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [RouterService, MenuService])
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map