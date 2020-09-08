import * as tslib_1 from "tslib";
// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CoreModule } from '../core/core.module';
let HomeModule = class HomeModule {
};
HomeModule = tslib_1.__decorate([
    NgModule({
        declarations: [HomeComponent],
        imports: [
            CommonModule,
            CoreModule
        ]
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=home.module.js.map