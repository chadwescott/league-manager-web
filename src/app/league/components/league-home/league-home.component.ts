import { Component, OnInit, OnDestroy } from '@angular/core';
import { League } from '../../models/league';
import { LeagueService } from '../../services/league.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lm-league-home',
  templateUrl: './league-home.component.html',
  styleUrls: ['./league-home.component.scss']
})
export class LeagueHomeComponent implements OnInit, OnDestroy {
  private _leagues$: Subscription;

  leagues: League[];
  selectedLeague: League;

  constructor(private _leagueService: LeagueService) {
    this._leagues$ = this._leagueService.getLeagues().subscribe(x => this.leagues = x);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this._leagues$.unsubscribe();
  }

  leagueSelected(league: League): void {
    this.selectedLeague = league;
  }

  clearSelectedLeague(): void {
    this.selectedLeague = null;
  }
}
