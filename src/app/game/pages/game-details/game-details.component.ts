import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { RouterService } from 'src/app/routing/services/router-service/router.service';
import { GameService } from '../../game.service';
import { Game } from 'src/app/core/models/game';
import { GameRound } from 'src/app/core/models/game-round';
import { GameRoundListComponent } from '../../components/game-round-list/game-round-list.component';

@Component({
  selector: 'lm-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit, OnDestroy {
  @ViewChild(GameRoundListComponent, { static: true }) gameRoundList: GameRoundListComponent;

  game: Game;
  rounds: GameRound[];

  private _routeParams$: Subscription;
  private _loadGame$: Subscription;
  private _getRounds$: Subscription;

  constructor(
    private _gameService: GameService,
    private _route: ActivatedRoute,
    private _routerService: RouterService) {
  }

  ngOnInit() {
    this._routeParams$ = this._route.params.subscribe(params => this.loadGame(params.gameId));
    this._getRounds$ = this._gameService.getGameRounds(this.game.id).subscribe(rounds => this.rounds = rounds);
  }

  ngOnDestroy() {
    this._routeParams$.unsubscribe();
    this._loadGame$.unsubscribe();
    this._getRounds$.unsubscribe();
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

  onAddRound(): void {
    const createRound$ = this._gameService.createRound(this.game).subscribe(() =>
      this._gameService.getGameRounds(this.game.id).subscribe(rounds => this.rounds = rounds)
    );
    createRound$.unsubscribe();
    this.gameRoundList.updateRounds();
  }

  onClose(): void {
    this._routerService.showGames();
  }
}
