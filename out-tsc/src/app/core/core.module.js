import * as tslib_1 from "tslib";
// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { RoutingModule } from '../routing/routing.module';
// Components
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
// Directives
import { CardPanelDirective } from './directives/card-panel.directive';
import { CardPanelTitleDirective } from './directives/card-panel-title.directive';
import { NumericInputDirective } from './directives/numeric-input.directive';
import { PaddedDirective } from './directives/padded.directive';
import { SectionHeaderDirective } from './directives/section-header.directive';
import { CardPanelBodyDirective } from './directives/card-panel-body.directive';
import { CardPanelContentDirective } from './directives/card-panel-content.directive';
// Providers
import { EnvServiceProvider } from './services/env.service.provider';
let CoreModule = class CoreModule {
};
CoreModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            HeaderComponent,
            MenuComponent,
            MenuCardComponent,
            PageLayoutComponent,
            PaginatorComponent,
            CardPanelBodyDirective,
            CardPanelContentDirective,
            CardPanelDirective,
            CardPanelTitleDirective,
            NumericInputDirective,
            PaddedDirective,
            SectionHeaderDirective
        ],
        imports: [
            CommonModule,
            FlexLayoutModule,
            HttpClientModule,
            MaterialModule,
            RoutingModule
        ],
        exports: [
            FlexLayoutModule,
            HeaderComponent,
            MaterialModule,
            MenuComponent,
            MenuCardComponent,
            PageLayoutComponent,
            PaginatorComponent,
            CardPanelBodyDirective,
            CardPanelContentDirective,
            CardPanelDirective,
            CardPanelTitleDirective,
            NumericInputDirective,
            PaddedDirective,
            SectionHeaderDirective
        ],
        providers: [
            EnvServiceProvider
        ]
    })
], CoreModule);
export { CoreModule };
//# sourceMappingURL=core.module.js.map