import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Game } from 'src/app/core/models/game';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from 'src/app/routing/services/router-service/router.service';
import { GameService } from '../../game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lm-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit, OnDestroy {
  game: Game;

  private _routeParams$: Subscription;
  private _loadGame$: Subscription;

  constructor(
    private _gameService: GameService,
    private _route: ActivatedRoute,
    private _routerService: RouterService) {
    this._routeParams$ = this._route.params.subscribe(params => this.loadGame(params.gameId));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._routeParams$.unsubscribe();
    this._loadGame$.unsubscribe();
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
