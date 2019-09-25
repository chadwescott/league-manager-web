import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { trigger, transition, useAnimation } from '@angular/animations';

import { FADE_IN_ANIMATION, FADE_OUT_ANIMATION } from 'src/app/core/constants/animations';
import { FADE_IN_OUT_TIMING } from 'src/app/core/constants/timings';

import { RouterService } from 'src/app/routing/services/router-service/router.service';
import { GameService } from '../../game.service';

import { Game } from 'src/app/core/models/game';
import { GameTeamScore } from 'src/app/core/models/game-team-score';
import { GameRoundListComponent } from '../../components/game-round-list/game-round-list.component';
import { ScoreSystem } from 'src/app/core/enums/score-system';
import { ScoreByRoundChartComponent } from '../../components/score-by-round-chart/score-by-round-chart.component';
import { Team } from 'src/app/core/models/teams';

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
  @ViewChild(GameRoundListComponent, { static: false }) gameRoundList: GameRoundListComponent;
  @ViewChild(ScoreByRoundChartComponent, { static: false }) scoreByRoundChart: ScoreByRoundChartComponent;

  game: Game;
  teams: Team[];
  gameTeamScores: GameTeamScore[];

  ScoreSystem = ScoreSystem;

  private _subscriptions$: Subscription[] = [];

  constructor(
    private _gameService: GameService,
    private _route: ActivatedRoute,
    private _routerService: RouterService) {
  }

  ngOnInit() {
    this._subscriptions$.push(this._route.params.subscribe(params => this.loadGame(params.gameId)));
  }

  ngOnDestroy() {
    for(let i = 0; i < this._subscriptions$.length; i++) {
      this._subscriptions$[i].unsubscribe();
    }
  }

  private loadGame(id: string) {
    this.loadGameTeams(id);
    this.loadGameTeamScores(id);
    this._subscriptions$.push(this._gameService.getGameById(id).subscribe(game => {
      if (game == null) {
        this._routerService.showGames();
        return;
      }
      this.game = game;
    }));
  }

  private loadGameTeams(id: string) {
    this._subscriptions$.push(this._gameService.getGameTeams(id).subscribe(teams => {
      this.teams = teams;
      this.updateGameTeamScores();
    }));
  }

  private loadGameTeamScores(id: string) {
    this._subscriptions$.push(this._gameService.getGameTeamScores(id).subscribe(gameTeamScores => {
      this.gameTeamScores = gameTeamScores;
      this.updateGameTeamScores();
    }));
  }


  private updateGameTeamScores() {
    if (!this.teams || this.teams.length === 0 || !this.gameTeamScores || this.gameTeamScores.length === 0) {
      return;
    }

    for (let i = 0; i < this.teams.length; i++) {
      const teamScore = this.gameTeamScores.find(x => x.teamId === this.teams[i].id);
      if (teamScore != null) {
        teamScore.team = this.teams[i];
      }
    }
  }

  onClose(): void {
    this._routerService.showGames();
  }
}
