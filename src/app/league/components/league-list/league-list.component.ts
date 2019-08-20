import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { League } from '../../models/league';

@Component({
  selector: 'lm-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss']
})
export class LeagueListComponent implements OnInit {
  @Input() leagues: League[];
  @Output() selectedLeague: EventEmitter<League> = new EventEmitter<League>();

  displayedColumns: string[] = ['star', 'name'];

  constructor() { }

  ngOnInit() {
  }

  selectLeague(league: League) {
    this.selectedLeague.emit(league);
  }
}
