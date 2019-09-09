// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AdministrationComponent } from '../administration/components/administration/administration.component';
import { GameHomeComponent } from '../game/pages/game-home/game-home.component';
import { HomeComponent } from '../home/pages/home/home.component';
import { LeagueHomeComponent } from '../league/pages/league-home/league-home.component';
import { RegisterComponent } from '../registration/components/register/register.component';
import { SignInComponent } from '../registration/components/sign-in/sign-in.component';

// Services
import { RouterService } from './services/router-service/router.service';
import { GameDetailsComponent } from '../game/pages/game-details/game-details.component';

const routes: Routes = [
  { path: 'administration', component: AdministrationComponent, pathMatch: 'full', data: { title: 'Administration' } },
  { path: 'games', component: GameHomeComponent, pathMatch: 'full', data: { title: 'Games' } },
  { path: 'games/:gameId', component: GameDetailsComponent, pathMatch: 'full', data: { title: 'Game Summary' } },
  { path: '', component: HomeComponent, pathMatch: 'full', data: { title: 'Home' } },
  { path: 'leagues', component: LeagueHomeComponent, pathMatch: 'full', data: { title: 'My Leagues' } },
  { path: 'register', component: RegisterComponent, pathMatch: 'full', data: { title: 'Register' } },
  { path: 'sign-in', component: SignInComponent, pathMatch: 'full', data: { title: 'Sign In' } },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [
    RouterService
  ]
})

export class RoutingModule { }
