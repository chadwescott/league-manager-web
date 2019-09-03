// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AdministrationModule } from './administration/administration.module';
import { CoreModule } from './core/core.module';
import { GameModule } from './game/game.module';
import { HomeModule } from './home/home.module';
import { LeagueModule } from './league/league.module';
import { PlayerModule } from './player/player.module';
import { RegistrationModule } from './registration/registration.module';
import { RoutingModule } from './routing/routing.module';
import { TeamModule } from './team/team.module';

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
    GameModule,
    HomeModule,
    LeagueModule,
    PlayerModule,
    ReactiveFormsModule,
    RegistrationModule,
    RoutingModule,
    TeamModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
