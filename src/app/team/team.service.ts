import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Team } from '../core/models/teams';
import { HttpService } from '../core/services/http.service';
import { EnvService } from '../core/services/env.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private _baseUrl: string;

  constructor(private _httpService: HttpService, private _envService: EnvService) {
    this._baseUrl = this._envService.apiUrl;
  }

  public getTeams(): Observable<Team[]> {
    return this._httpService.get<Team[]>(`${this._baseUrl}/teams`);
  }
}
