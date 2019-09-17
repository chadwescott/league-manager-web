import { Component, OnInit, Input, ViewChild, Output, EventEmitter, AfterViewInit, ElementRef } from '@angular/core';
import { Round } from 'src/app/core/models/round';
import { MatTable } from '@angular/material';
import { Game } from 'src/app/core/models/game';
import { Team } from 'src/app/core/models/teams';
import { trigger, transition, useAnimation, query } from '@angular/animations';
import { fadeOutAnimation } from 'src/app/core/animations/fade-out-animation';
import { fadeInAnimation } from 'src/app/core/animations/fade-in-animation';

@Component({
  selector: 'lm-game-round-list',
  templateUrl: './game-round-list.component.html',
  styleUrls: ['./game-round-list.component.scss'],
  animations: [
    trigger('roundsChanged', [
      transition('* => *', [
        query(':enter', [
          useAnimation(fadeInAnimation, {
            params: { timings: '800ms ease-in-out' }
          })
        ], { optional: true }),
        query(':leave', [
          useAnimation(fadeOutAnimation, {
            params: { timings: '800ms ease-in-out' }
          })
        ], { optional: true })
      ])
    ])
  ]
})
export class GameRoundListComponent implements OnInit, AfterViewInit {
  @Input() game: Game;
  @Input() rounds: Round[] = [];

  @Output() addRound = new EventEmitter();
  @Output() editRound = new EventEmitter<Round>();
  @Output() deleteRound = new EventEmitter<Round>();

  @ViewChild(MatTable, { static: true }) table: MatTable<Round[]>;
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

  onEditRound(round: Round) {
    this.editRound.emit(round);
  }

  onDeleteRound(round: Round) {
    this.deleteRound.emit(round);
  }
}
