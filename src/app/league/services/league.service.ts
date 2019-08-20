import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { League } from '../models/league';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private _leagues: League[] = [
    new League('1', 'Perinton Rec Basketball'),
    new League('2', 'CooperVision Foosball'),
    new League('3', 'CooperVision Cornhole')
  ];

  constructor() { }

  getLeagues(): Observable<League[]> {
    return of(this._leagues);
  }
}
