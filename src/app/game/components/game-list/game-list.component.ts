import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Game } from 'src/app/core/models/game';
import { MatTable } from '@angular/material';

@Component({
  selector: 'lm-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  @ViewChild(MatTable, { static: false }) table: MatTable<Game>;
  @Input() games: Game[];
  @Output() selectedGame: EventEmitter<Game> = new EventEmitter<Game>();

  displayedColumns: string[] = ['star', 'number', 'startTime'];

  constructor() { }

  ngOnInit() {
  }

  selectGame(game: Game) {
    this.selectedGame.emit(game);
  }

  public update(): void {
    this.table.renderRows();
  }
}
