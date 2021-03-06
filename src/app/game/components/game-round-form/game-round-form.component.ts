import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChildren, AfterViewInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { Round } from 'src/app/core/models/round';
import { FADE_IN_OUT_TIMING } from 'src/app/core/constants/timings';
import { FADE_RIGHT_ANIMATION, FADE_LEFT_ANIMATION } from 'src/app/core/constants/animations';

@Component({
  selector: 'lm-game-round-form',
  templateUrl: './game-round-form.component.html',
  styleUrls: ['./game-round-form.component.scss'],
  animations: [
    trigger('roundChanged', [
      transition(':increment', [
        useAnimation(FADE_RIGHT_ANIMATION, {
          params: { timings: FADE_IN_OUT_TIMING }
        })
      ]),
      transition(':decrement', [
        useAnimation(FADE_LEFT_ANIMATION, {
          params: { timings: FADE_IN_OUT_TIMING }
        })
      ])
    ])
  ]
})
export class GameRoundFormComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() roundLabel = 'Round';
  @Input() round: Round;

  @Output() scoreChanged = new EventEmitter();
  @Output() scoreEntered = new EventEmitter();
  @Output() loadFirstRound = new EventEmitter();
  @Output() loadNextRound = new EventEmitter();
  @Output() loadPreviousRound = new EventEmitter();
  @Output() loadLastRound = new EventEmitter();

  @ViewChildren('score') scoreInputs: any;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    setTimeout(() => this.scoreInputs.first.nativeElement.select(), 100);
  }

  ngOnChanges(changes: SimpleChanges) {
    const round = changes.round;
    if (round.currentValue !== round.previousValue && this.scoreInputs) {
      setTimeout(() => this.scoreInputs.first.nativeElement.select(), 100);
    }
  }

  onScoreChanged(): void {
    this.scoreChanged.emit();
  }

  onKeyup(event) {
    switch (event.key) {
      case 'Enter':
        this.scoreEntered.emit();
        break;
      case 'ArrowUp':
        if (event.ctrlKey) { this.loadFirstRound.emit(); }
        break;
      case 'ArrowLeft':
        if (event.ctrlKey) { this.loadPreviousRound.emit(); }
        break;
      case 'ArrowRight':
        if (event.ctrlKey) { this.loadNextRound.emit(); }
        break;
      case 'ArrowDown':
        if (event.ctrlKey) { this.loadLastRound.emit(); }
        break;
    }
  }
}
