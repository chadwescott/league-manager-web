import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameHomeComponent } from './pages/game-home/game-home.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';



@NgModule({
  declarations: [
    GameFormComponent,
    GameListComponent,
    GameHomeComponent,
    GameDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GameModule { }
