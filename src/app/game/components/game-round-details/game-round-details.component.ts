import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { FADE_IN_ANIMATION, FADE_OUT_ANIMATION } from 'src/app/core/constants/animations';
import { FADE_IN_OUT_TIMING } from 'src/app/core/constants/timings';
import { Game } from 'src/app/core/models/game';
import { GameRoundListComponent } from '../game-round-list/game-round-list.component';
import { ScoreByRoundChartComponent } from '../score-by-round-chart/score-by-round-chart.component';
import { Round } from 'src/app/core/models/round';
import { Team } from 'src/app/core/models/teams';
import { GameService } from '../../game.service';

@Component({
  selector: 'lm-game-round-details',
  templateUrl: './game-round-details.component.html',
  styleUrls: ['./game-round-details.component.scss'],
  animations: [
    trigger('roundChanged', [
      transition(':enter', [
        useAnimation(FADE_IN_ANIMATION, {
          params: { timings: FADE_IN_OUT_TIMING }
        })
      ]),
      transition(':leave', [
        useAnimation(FADE_OUT_ANIMATION, {
          params: { timings: FADE_IN_OUT_TIMING }
        })
      ])
    ]),
    trigger('gameChanged', [
      transition(':enter', [
        useAnimation(FADE_IN_ANIMATION, {
          params: { timings: FADE_IN_OUT_TIMING }
        })
      ]),
      transition(':leave', [
        useAnimation(FADE_OUT_ANIMATION, {
          params: { timings: FADE_IN_OUT_TIMING }
        })
      ])
    ])
  ]
})
export class GameRoundDetailsComponent implements OnInit {
  @Input() game: Game;
  @Input() rounds: Round[];

  @ViewChild(GameRoundListComponent, { static: false }) gameRoundList: GameRoundListComponent;
  @ViewChild(ScoreByRoundChartComponent, { static: false }) scoreByRoundChart: ScoreByRoundChartComponent;

  teams: Team[];
  wildCard: string;
  roundLabel = 'Hand';
  selectedRound: Round;

  private cards: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  constructor(private _gameService: GameService) { }

  ngOnInit() {
    this.teams = this.game.teamScores.map(ts => ts.team);
    this.updateRounds();
  }

  onAddRound(): void {
    this._gameService.createRound(this.game).subscribe(x => {
      this.selectedRound = x;
      this.updateRounds();
      this.gameRoundList.scrollToBottom();
    });
  }

  private updateRounds(): void {
    this._gameService.getGameRounds(this.game.id).subscribe(rounds => {
      this.rounds = rounds;

      if (this.rounds && this.rounds.length > 0 && !this.selectedRound) {
        this.selectedRound = this.rounds[this.rounds.length - 1];
      }
      this.updateWildCard();
      if (this.gameRoundList) { this.gameRoundList.updateRounds(); }
      if (this.scoreByRoundChart) { this.scoreByRoundChart.initializeChartData(); }
    });
  }

  onScoreChanged() {
    this._gameService.updateGameScores(this.game);
    if (this.scoreByRoundChart) { this.scoreByRoundChart.initializeChartData(); }
  }

  onEditRound(round: Round): void {
    this.selectedRound = round;
  }

  onDeleteRound(round: Round): void {
    if (this.selectedRound === round) { this.selectedRound = null; }
    this._gameService.deleteRound(round).subscribe(() => this.updateRounds());
  }

  private updateWildCard(): void {
    this.wildCard = this.cards[(this.rounds.length - 1) % this.cards.length];
  }

  onFirstRound(): void {
    if (this.rounds && this.rounds.length > 0) {
      this.selectedRound = this.rounds[0];
    }
  }

  onPreviousRound(): void {
    if (this.rounds && this.rounds.length > 0) {
      const index = this.rounds.indexOf(this.selectedRound);
      if (index > 0) {
        this.selectedRound = this.rounds[index - 1];
      }
    }
  }

  onNextRound(): void {
    if (this.rounds && this.rounds.length > 0) {
      const index = this.rounds.indexOf(this.selectedRound);
      if (index < this.rounds.length - 1) {
        this.selectedRound = this.rounds[index + 1];
      }
    }
  }

  onLastRound(): void {
    if (this.rounds && this.rounds.length > 0) {
      this.selectedRound = this.rounds[this.rounds.length - 1];
    }
  }

}
