// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { TeamModule } from '../team/team.module';

// components
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameHomeComponent } from './pages/game-home/game-home.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { ScoreFormComponent } from './components/score-form/score-form.component';

@NgModule({
  declarations: [
    GameFormComponent,
    GameListComponent,
    GameHomeComponent,
    GameDetailsComponent,
    ScoreFormComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    TeamModule
  ]
})
export class GameModule { }
