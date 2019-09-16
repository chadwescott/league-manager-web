import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { trigger, transition, useAnimation, query } from '@angular/animations';

import { RouterService } from 'src/app/routing/services/router-service/router.service';
import { GameService } from '../../game.service';
import { Game } from 'src/app/core/models/game';
import { GameRound } from 'src/app/core/models/game-round';
import { GameRoundListComponent } from '../../components/game-round-list/game-round-list.component';
import { Team } from 'src/app/core/models/teams';
import { ScoreSystem } from 'src/app/core/enums/score-system';
import { fadeInAnimation } from 'src/app/core/animations/fade-in-animation';
import { fadeOutAnimation } from 'src/app/core/animations/fade-out-animation';
import { ScoreByRoundChartComponent } from '../../components/score-by-round-chart/score-by-round-chart.component';

@Component({
  selector: 'lm-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
  animations: [
    trigger('roundChanged', [
      transition(':enter', [
        query('.card-panel-content', [
          useAnimation(fadeInAnimation, {
            params: { timings: '800ms ease-in-out' }
          })
        ])
      ]),
      transition(':leave', [
        query('.card-panel-content', [
          useAnimation(fadeOutAnimation, {
            params: { timings: '800ms ease-in-out' }
          })
        ])
      ])
    ]),
  ]
})
export class GameDetailsComponent implements OnInit, OnDestroy {
  @ViewChild(GameRoundListComponent, { static: false }) gameRoundList: GameRoundListComponent;
  @ViewChild(ScoreByRoundChartComponent, { static: false }) scoreByRoundChart: ScoreByRoundChartComponent;

  game: Game;
  teams: Team[];
  rounds: GameRound[];
  wildCard: string;
  selectedRound: GameRound;

  ScoreSystem = ScoreSystem;

  private cards: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  private _routeParams$: Subscription;
  private _loadGame$: Subscription;

  constructor(
    private _gameService: GameService,
    private _route: ActivatedRoute,
    private _routerService: RouterService) {
  }

  ngOnInit() {
    this._routeParams$ = this._route.params.subscribe(params => this.loadGame(params.gameId));
  }

  ngOnDestroy() {
    if (this._routeParams$) { this._routeParams$.unsubscribe(); }
    if (this._loadGame$) { this._loadGame$.unsubscribe(); }
  }

  private loadGame(id: string) {
    this._loadGame$ = this._gameService.getGameById(id).subscribe(game => {
      if (game == null) {
        this._routerService.showGames();
        return;
      }
      this.game = game;
      this.teams = game.teamScores.map(ts => ts.team);
      this.updateRounds();
    });
  }

  onAddRound(): void {
    this._gameService.createRound(this.game).subscribe(x => {
      this.selectedRound = x;
      this.updateRounds();
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

  onEditRound(round: GameRound): void {
    this.selectedRound = round;
  }

  onDeleteRound(round: GameRound): void {
    if (this.selectedRound === round) { this.selectedRound = null; }
    this._gameService.deleteRound(round).subscribe(() => this.updateRounds());
  }

  private updateWildCard(): void {
    this.wildCard = this.cards[(this.rounds.length - 1) % this.cards.length];
  }

  onClose(): void {
    this._routerService.showGames();
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
