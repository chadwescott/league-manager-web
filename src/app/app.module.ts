// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AdministrationModule } from './administration/administration.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { RegistrationModule } from './registration/registration.module';
import { RoutingModule } from './routing/routing.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AdministrationModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HomeModule,
    ReactiveFormsModule,
    RegistrationModule,
    RoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
