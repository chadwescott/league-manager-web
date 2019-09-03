import { Injectable } from '@angular/core';
import { Player } from '../core/models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private _players: Player[] = [
    new Player('1', 'Chad', 'Wescott', 'Chad', 'chadwescott@gmail.com'),
    new Player('2', 'Nancy', 'Wescott', 'Nancy', 'nancywescott@gmail.com')
  ];

  constructor() { }

  public getPlayers(): Player[] {
    return this._players;
  }

  public getPlayerById(playerId: string): Player {
    return this._players.find(x => x.id === playerId);
  }

  public getPlayersByTeam(teamId: string): Player[] {
    return this._players;
  }
}
