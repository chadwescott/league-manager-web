import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { RegisterComponent } from './sign-in/components/register/register.component';
import { SignInComponent } from './sign-in/components/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { title: 'Home' } },
  { path: 'register', component: RegisterComponent, pathMatch: 'full', data: { title: 'Register' } },
  { path: 'sign-in', component: SignInComponent, pathMatch: 'full', data: { title: 'Sign In' } },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class RoutingModule { }
