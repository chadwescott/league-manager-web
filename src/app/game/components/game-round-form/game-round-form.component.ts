import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameRound } from 'src/app/core/models/game-round';

@Component({
  selector: 'lm-game-round-form',
  templateUrl: './game-round-form.component.html',
  styleUrls: ['./game-round-form.component.scss']
})
export class GameRoundFormComponent implements OnInit {
  @Input() gameRound: GameRound;

  @Output() scoreChanged = new EventEmitter();
  @Output() first = new EventEmitter();
  @Output() previous = new EventEmitter();
  @Output() next = new EventEmitter();
  @Output() last = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onScoreChanged(): void {
    this.scoreChanged.emit();
  }

  onFirst() {
    this.first.emit();
  }

  onPrevious() {
    this.previous.emit();
  }

  onNext() {
    this.next.emit();
  }

  onLast() {
    this.last.emit();
  }
}
