import { Component, OnInit, OnDestroy } from '@angular/core';
import { League } from '../../models/league';
import { LeagueService } from '../../services/league.service';
import { Subscription } from 'rxjs';
import { Member } from 'src/app/members/models/member';

@Component({
  selector: 'lm-league-home',
  templateUrl: './league-home.component.html',
  styleUrls: ['./league-home.component.scss']
})
export class LeagueHomeComponent implements OnInit, OnDestroy {
  private _leagues$: Subscription;
  private _getMembers$: Subscription;

  leagues: League[];
  selectedLeague: League;
  leagueMembers: Member[];

  constructor(private _leagueService: LeagueService) {
    this._leagues$ = this._leagueService.getLeagues().subscribe(x => this.leagues = x);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this._leagues$) { this._leagues$.unsubscribe(); }
    if (this._getMembers$) { this._getMembers$.unsubscribe(); }
  }

  leagueSelected(league: League): void {
    this.selectedLeague = league;
    this._getMembers$ = this._leagueService.getLeagueMembers(league).subscribe(x => this.leagueMembers = x);
  }

  clearSelectedLeague(): void {
    this.selectedLeague = null;
  }
}
