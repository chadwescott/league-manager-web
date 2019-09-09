import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lm-game-round-form',
  templateUrl: './game-round-form.component.html',
  styleUrls: ['./game-round-form.component.scss']
})
export class GameRoundFormComponent implements OnInit {
  @Output() addRound = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddRound() {
    this.addRound.emit();
  }
}
