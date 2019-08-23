import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { League } from '../models/league';
import { Member } from 'src/app/members/models/member';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private _leagues: League[] = [
    new League('1', 'Perinton Rec Basketball'),
    new League('2', 'CooperVision Foosball'),
    new League('3', 'CooperVision Cornhole')
  ];

  private _members: Member[] = [
    new Member('1', 'Chad', 'Wescott', 'Chadley', 'chadwescott@gmail.com')
  ];

  constructor() { }

  getLeagues(): Observable<League[]> {
    return of(this._leagues);
  }

  getLeagueMembers(league: League): Observable<Member[]> {
    return of(this._members);
  }
}
