import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamHomeComponent } from './pages/team-home/team-home.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';



@NgModule({
  declarations: [TeamHomeComponent, TeamListComponent, TeamDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class TeamModule { }
