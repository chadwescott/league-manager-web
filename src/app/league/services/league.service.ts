import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { League } from '../../core/models/league';
import { Player } from 'src/app/core/models/player';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private _leagues: League[] = [
    new League('1', 'Perinton Rec Basketball'),
    new League('2', 'CooperVision Foosball'),
    new League('3', 'CooperVision Cornhole')
  ];

  private _players: Player[] = [
    new Player('1', 'Chad', 'Wescott', 'Chadley', 'chadwescott@gmail.com')
  ];

  constructor() { }

  getLeagues(): Observable<League[]> {
    return of(this._leagues);
  }

  getLeaguePlayers(league: League): Observable<Player[]> {
    return of(this._players);
  }
}
