import { Component, OnInit, Input, ViewChild, Output, EventEmitter, AfterViewInit, ElementRef } from '@angular/core';
import { GameRound } from 'src/app/core/models/game-round';
import { MatTable } from '@angular/material';
import { Game } from 'src/app/core/models/game';
import { Team } from 'src/app/core/models/teams';

@Component({
  selector: 'lm-game-round-list',
  templateUrl: './game-round-list.component.html',
  styleUrls: ['./game-round-list.component.scss']
})
export class GameRoundListComponent implements OnInit, AfterViewInit {
  @Input() game: Game;
  @Input() rounds: GameRound[] = [];

  @Output() addRound = new EventEmitter();
  @Output() editRound = new EventEmitter<GameRound>();
  @Output() deleteRound = new EventEmitter<GameRound>();

  @ViewChild(MatTable, { static: true }) table: MatTable<GameRound[]>;
  @ViewChild('container', { static: true }) private container: ElementRef;

  teams: Team[];
  displayedColumns: string[] = ['round', 'actions'];

  constructor() { }

  ngOnInit() {
    this.teams = this.game.teamScores.map(x => x.team);
    for (let i = 0; i < this.game.teamScores.length; i++) {
      this.displayedColumns.splice(this.displayedColumns.length - 1, 0, this.game.teamScores[i].team.id);
    }
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
  }

  updateRounds() {
    this.table.renderRows();
  }

  onAddRound(): void {
    this.addRound.emit();
    this.scrollToBottom();
  }

  onEditRound(round: GameRound) {
    this.editRound.emit(round);
  }

  onDeleteRound(round: GameRound) {
    this.deleteRound.emit(round);
  }
}
