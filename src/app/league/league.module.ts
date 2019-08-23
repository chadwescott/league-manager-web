// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { MembersModule } from '../members/members.module';

// Components
import { LeagueDetailsComponent } from './components/league-details/league-details.component';

// Services
import { LeagueService } from './services/league.service';
import { LeagueListComponent } from './components/league-list/league-list.component';
import { LeagueHomeComponent } from './components/league-home/league-home.component';

@NgModule({
  declarations: [
    LeagueDetailsComponent,
    LeagueListComponent,
    LeagueHomeComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MembersModule
  ],
  exports: [
    LeagueDetailsComponent,
    LeagueListComponent
  ],
  providers: [
    LeagueService
  ]
})
export class LeagueModule { }
