import { Component, OnInit, OnDestroy } from '@angular/core';
import { League } from '../../../core/models/league';
import { LeagueService } from '../../services/league.service';
import { Subscription } from 'rxjs';
import { Player } from 'src/app/core/models/player';

@Component({
  selector: 'lm-league-home',
  templateUrl: './league-home.component.html',
  styleUrls: ['./league-home.component.scss']
})
export class LeagueHomeComponent implements OnInit, OnDestroy {
  private _leagues$: Subscription;
  private _getPlayers$: Subscription;

  leagues: League[];
  selectedLeague: League;
  leaguePlayers: Player[];

  constructor(private _leagueService: LeagueService) {
    this._leagues$ = this._leagueService.getLeagues().subscribe(x => this.leagues = x);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this._leagues$) { this._leagues$.unsubscribe(); }
    if (this._getPlayers$) { this._getPlayers$.unsubscribe(); }
  }

  leagueSelected(league: League): void {
    this.selectedLeague = league;
    this._getPlayers$ = this._leagueService.getLeaguePlayers(league).subscribe(x => this.leaguePlayers = x);
  }

  clearSelectedLeague(): void {
    this.selectedLeague = null;
  }
}
