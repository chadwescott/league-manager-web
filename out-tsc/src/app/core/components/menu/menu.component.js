import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MenuService } from '../../services/menu-service/menu.service';
let MenuComponent = class MenuComponent {
    constructor(menuService) {
        this.menuService = menuService;
        this.menuData = this.menuService.getMenuData();
    }
    ngOnInit() {
    }
};
MenuComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [MenuService])
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map