import * as tslib_1 from "tslib";
// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@angular/flex-layout';
// Components
import { AdministrationComponent } from './components/administration/administration.component';
let AdministrationModule = class AdministrationModule {
};
AdministrationModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AdministrationComponent
        ],
        imports: [
            CommonModule,
            CoreModule
        ]
    })
], AdministrationModule);
export { AdministrationModule };
//# sourceMappingURL=administration.module.js.map