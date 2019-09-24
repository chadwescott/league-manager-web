import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/core/models/game';
import { trigger, transition, useAnimation } from '@angular/animations';
import { FADE_IN_ANIMATION, FADE_OUT_ANIMATION } from 'src/app/core/constants/animations';
import { FADE_IN_OUT_TIMING } from 'src/app/core/constants/timings';

@Component({
  selector: 'lm-game-ad-hoc-details',
  templateUrl: './game-ad-hoc-details.component.html',
  styleUrls: ['./game-ad-hoc-details.component.scss'],
  animations: [
    trigger('gameChanged', [
      transition(':enter', [
        useAnimation(FADE_IN_ANIMATION, {
          params: { timings: FADE_IN_OUT_TIMING }
        })
      ]),
      transition(':leave', [
        useAnimation(FADE_OUT_ANIMATION, {
          params: { timings: FADE_IN_OUT_TIMING }
        })
      ])
    ])
  ]
})
export class GameAdHocDetailsComponent implements OnInit {
  @Input() game: Game;

  constructor() { }

  ngOnInit() {
  }

}
