// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { RoutingModule } from '../routing/routing.module';

// Components
import { HeaderComponent } from './components/header/header.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    MenuCardComponent,
    PageLayoutComponent,
    InputFieldComponent
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
    InputFieldComponent,
    MaterialModule,
    MenuComponent,
    MenuCardComponent,
    PageLayoutComponent
  ]
})
export class CoreModule { }
