import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../../../core/models/player';

@Component({
  selector: 'lm-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  @Input() players: Player[];
  @Output() playerSelected: EventEmitter<Player> = new EventEmitter<Player>();

  displayedColumns: string[] = ['firstName', 'lastName', 'nickName'];

  constructor() { }

  ngOnInit() {
  }

  selectPlayer(player: Player): void {
    this.playerSelected.emit(player);
  }
}
