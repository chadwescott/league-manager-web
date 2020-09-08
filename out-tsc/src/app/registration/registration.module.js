import * as tslib_1 from "tslib";
// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from '../routing/routing.module';
// Components
import { RegisterComponent } from './components/register/register.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
let RegistrationModule = class RegistrationModule {
};
RegistrationModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            RegisterComponent,
            SignInComponent
        ],
        imports: [
            CommonModule,
            CoreModule,
            ReactiveFormsModule,
            RoutingModule
        ]
    })
], RegistrationModule);
export { RegistrationModule };
//# sourceMappingURL=registration.module.js.map