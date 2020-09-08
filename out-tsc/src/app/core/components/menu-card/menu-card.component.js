import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { MenuData } from '../../models/menu-data';
let MenuCardComponent = class MenuCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", MenuData)
], MenuCardComponent.prototype, "menuData", void 0);
MenuCardComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-menu-card',
        templateUrl: './menu-card.component.html',
        styleUrls: ['./menu-card.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], MenuCardComponent);
export { MenuCardComponent };
//# sourceMappingURL=menu-card.component.js.map