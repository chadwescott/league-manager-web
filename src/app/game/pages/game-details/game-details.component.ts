import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { trigger, transition, useAnimation } from '@angular/animations';

import { RouterService } from 'src/app/routing/services/router-service/router.service';
import { GameService } from '../../game.service';
import { Game } from 'src/app/core/models/game';
import { Round } from 'src/app/core/models/round';
import { GameRoundListComponent } from '../../components/game-round-list/game-round-list.component';
import { Team } from 'src/app/core/models/teams';
import { ScoreSystem } from 'src/app/core/enums/score-system';
import { ScoreByRoundChartComponent } from '../../components/score-by-round-chart/score-by-round-chart.component';
import { FADE_IN_ANIMATION, FADE_OUT_ANIMATION } from 'src/app/core/constants/animations';
import { FADE_IN_OUT_TIMING } from 'src/app/core/constants/timings';

@Component({
  selector: 'lm-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
  animations: [
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
export class GameDetailsComponent implements OnInit, OnDestroy {
  @ViewChild(GameRoundListComponent) gameRoundList: GameRoundListComponent;
  @ViewChild(ScoreByRoundChartComponent) scoreByRoundChart: ScoreByRoundChartComponent;

  game: Game;

  ScoreSystem = ScoreSystem;

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
    });
  }

  onClose(): void {
    this._routerService.showGames();
  }
}
