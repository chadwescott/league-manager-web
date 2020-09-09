import { Component, OnInit, Input, ViewChild, Output, EventEmitter, AfterViewInit, ElementRef } from '@angular/core';
import { Round } from 'src/app/core/models/round';
import { MatTable } from '@angular/material/table';
import { Game } from 'src/app/core/models/game';
import { Team } from 'src/app/core/models/teams';
import { trigger, transition, useAnimation, query, animate, style } from '@angular/animations';
import { SCALE_IN_VERTICAL_ANIMATION, SCALE_OUT_VERTICAL_ANIMATION } from 'src/app/core/constants/animations';
import { SCALE_IN_OUT_TIMING, FADE_IN_OUT_TIMING } from 'src/app/core/constants/timings';
import { COLORS } from 'src/app/core/constants/colors';

@Component({
  selector: 'lm-game-round-list',
  templateUrl: './game-round-list.component.html',
  styleUrls: ['./game-round-list.component.scss'],
  animations: [
    trigger('roundsChanged', [
      transition('* => *', [
        query(':enter', [
          useAnimation(SCALE_IN_VERTICAL_ANIMATION, {
            params: { timings: SCALE_IN_OUT_TIMING }
          })
        ], { optional: true }),
        query(':leave', [
          useAnimation(SCALE_OUT_VERTICAL_ANIMATION, {
            params: { timings: SCALE_IN_OUT_TIMING }
          })
        ], { optional: true })
      ])
    ]),
    trigger('scoreChanged', [
      transition(':increment', [
        animate(SCALE_IN_OUT_TIMING, style({ background: 'yellow', color: 'black' }))
      ]),
      transition(':decrement', [
        animate(SCALE_IN_OUT_TIMING, style({ background: 'yellow', color: 'red' }))
      ])
    ])
  ]
})
export class GameRoundListComponent implements OnInit, AfterViewInit {
  @Input() game: Game;
  @Input() roundLabel = 'Round';
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
