// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AdministrationComponent } from '../administration/components/administration/administration.component';
import { HomeComponent } from '../home/components/home/home.component';
import { RegisterComponent } from '../registration/components/register/register.component';
import { SignInComponent } from '../registration/components/sign-in/sign-in.component';

// Services
import { RouterService } from './services/router-service/router.service';

const routes: Routes = [
  { path: 'administration', component: AdministrationComponent, pathMatch: 'full', data: { title: 'Administration' } },
  { path: '', component: HomeComponent, pathMatch: 'full', data: { title: 'Home' } },
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
