import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material.module';
import { RoutingModule } from './modules/routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/core/components/header/header.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { MenuComponent } from './modules/core/components/menu/menu.component';
import { MenuItemComponent } from './modules/core/components/menu-item/menu-item.component';
import { SignInComponent } from './modules/sign-in/components/sign-in/sign-in.component';
import { RegisterComponent } from './modules/sign-in/components/register/register.component';
import { PageLayoutComponent } from './modules/core/components/page-layout/page-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    MenuItemComponent,
    SignInComponent,
    RegisterComponent,
    PageLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
