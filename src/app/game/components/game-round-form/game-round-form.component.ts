import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChildren, AfterViewInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { Round } from 'src/app/core/models/round';
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
export class GameRoundFormComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() round: Round;

  @Output() scoreChanged = new EventEmitter();
  @Output() scoreEntered = new EventEmitter();

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

  onKeyup(event: { key: string; }) {
    if (event.key === 'Enter') {
      this.scoreEntered.emit();
    }
  }
}
