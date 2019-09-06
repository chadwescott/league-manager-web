// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { TeamModule } from '../team/team.module';
import { RoundScoreFormComponent } from './components/round-score-form/round-score-form.component';



@NgModule({
  declarations: [RoundScoreFormComponent],
  imports: [
    CommonModule,
    CoreModule,
    TeamModule
  ],
  exports: []
})
export class ScoreModule { }
