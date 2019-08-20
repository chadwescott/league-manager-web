// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { RoutingModule } from '../routing/routing.module';

// Components
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RoutingModule
  ],
  exports: [
    FlexLayoutModule,
    HeaderComponent,
    MaterialModule,
    MenuComponent,
    MenuItemComponent,
    PageLayoutComponent
  ]
})
export class CoreModule { }
