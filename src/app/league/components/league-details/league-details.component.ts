import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { League } from '../../models/league';

@Component({
  selector: 'lm-league-details',
  templateUrl: './league-details.component.html',
  styleUrls: ['./league-details.component.scss']
})
export class LeagueDetailsComponent implements OnInit {
  @Input() league: League;
  @Output() leagueClosed: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.leagueClosed.emit();
  }
}
