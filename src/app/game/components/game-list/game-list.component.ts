import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Game } from 'src/app/core/models/game';

@Component({
  selector: 'lm-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  @Input() games: Game[];
  @Output() selectedGame: EventEmitter<Game> = new EventEmitter<Game>();

  displayedColumns: string[] = ['star', 'number', 'startTime'];

  constructor() { }

  ngOnInit() {
  }

  selectGame(game: Game) {
    this.selectedGame.emit(game);
  }
}
