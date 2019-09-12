import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { GameRound } from 'src/app/core/models/game-round';
import { fadeLeftAnimation } from 'src/app/core/animations/fade-left-animation';
import { fadeRightAnimation } from 'src/app/core/animations/fade-right-animation';

@Component({
  selector: 'lm-game-round-form',
  templateUrl: './game-round-form.component.html',
  styleUrls: ['./game-round-form.component.scss'],
  animations: [
    trigger('roundChanged', [
      transition(':increment', [
        useAnimation(fadeRightAnimation, {
          params: { timings: '800ms ease-in-out' }
        })
      ]),
      transition(':decrement', [
        useAnimation(fadeLeftAnimation, {
          params: { timings: '800ms ease-in-out' }
        })
      ])
    ])
  ]
})
export class GameRoundFormComponent implements OnInit, OnChanges {
  @Input() round: GameRound;

  @Output() scoreChanged = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    const round = changes.round;
    if (round.currentValue !== round.previousValue) {

    }
  }

  onScoreChanged(): void {
    this.scoreChanged.emit();
  }
}
