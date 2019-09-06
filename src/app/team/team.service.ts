import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Team } from '../core/models/teams';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private _teams: Team[] = [
    new Team('1', 'Chad', 1),
    new Team('2', 'Nancy', 2),
    new Team('3', 'Molly', 3),
    new Team('4', 'Elizabeth', 4),
    new Team('5', 'Annabelle', 5),
  ];

  constructor() { }

  public getTeams(): Observable<Team[]> {
    return of(this._teams);
  }
}
