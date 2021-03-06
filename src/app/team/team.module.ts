// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';

// components
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { TeamHomeComponent } from './pages/team-home/team-home.component';
import { TeamListComponent } from './components/team-list/team-list.component';

@NgModule({
  declarations: [
    TeamDetailsComponent,
    TeamFormComponent,
    TeamHomeComponent,
    TeamListComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule
  ],
  exports: [
  ]
})
export class TeamModule { }
