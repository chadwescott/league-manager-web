// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerDetailsComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    PlayerListComponent,
    PlayerDetailsComponent
  ]
})
export class PlayerModule { }
