import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { GameRound } from 'src/app/core/models/game-round';
import { MatTable } from '@angular/material';
import { Game } from 'src/app/core/models/game';

@Component({
  selector: 'lm-game-round-list',
  templateUrl: './game-round-list.component.html',
  styleUrls: ['./game-round-list.component.scss']
})
export class GameRoundListComponent implements OnInit {
  @Input() game: Game;
  @Input() rounds: GameRound[];

  @Output() addRound = new EventEmitter();

  @ViewChild(MatTable, { static: true}) table: MatTable<GameRound[]>;

  displayedColumns: string[] = ['round'];

  constructor() { }

  ngOnInit() {
    if (this.rounds.length > 0) {
      for (let i = 0; i < this.rounds[0].teamScores.length; i++) {
        this.displayedColumns.push(this.rounds[0].teamScores[i].team.id);
      }
    }
  }

  updateRounds() {
    this.table.renderRows();
  }

  onAddRound(): void {
    this.addRound.emit();
  }
}
