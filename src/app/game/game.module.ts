// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { TeamModule } from '../team/team.module';

// components
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameScoreSummaryComponent } from './components/game-score-summary/game-score-summary.component';

// pages
import { GameHomeComponent } from './pages/game-home/game-home.component';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { GameRoundFormComponent } from './components/game-round-form/game-round-form.component';
import { GameRoundListComponent } from './components/game-round-list/game-round-list.component';
import { WildCardIndicatorComponent } from './components/wild-card-indicator/wild-card-indicator.component';
import { ScoreByRoundChartComponent } from './components/score-by-round-chart/score-by-round-chart.component';
import { MaterialModule } from '../core/material.module';

@NgModule({
  declarations: [
    GameFormComponent,
    GameListComponent,
    GameHomeComponent,
    GameDetailsComponent,
    GameScoreSummaryComponent,
    GameRoundFormComponent,
    GameRoundListComponent,
    WildCardIndicatorComponent,
    ScoreByRoundChartComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    MaterialModule,
    GoogleChartsModule.forRoot(),
    TeamModule
  ]
})
export class GameModule { }
