// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { PlayerModule } from '../player/player.module';

// Components
import { LeagueDetailsComponent } from './components/league-details/league-details.component';

// Services
import { LeagueService } from './services/league.service';
import { LeagueListComponent } from './components/league-list/league-list.component';
import { LeagueHomeComponent } from './pages/league-home/league-home.component';

@NgModule({
  declarations: [
    LeagueDetailsComponent,
    LeagueListComponent,
    LeagueHomeComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    PlayerModule
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
