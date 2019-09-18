import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { HIGHLIGHT_ANIMATION } from 'src/app/core/animations/highlight-animation';
import { COLORS } from 'src/app/core/colors';
import { TIMINGS } from 'src/app/core/animations/timings';

@Component({
  selector: 'lm-wild-card-indicator',
  templateUrl: './wild-card-indicator.component.html',
  styleUrls: ['./wild-card-indicator.component.scss'],
  animations: [
    trigger('wildCardChanged', [
      transition('* => *', [
        useAnimation(HIGHLIGHT_ANIMATION, {
          params: { timings: TIMINGS.HIGHLIGHT_TIMING, highlightColor: COLORS.HIGHLIGHT_COLOR }
        })
      ])
    ])
  ]
})
export class WildCardIndicatorComponent implements OnInit {
  @Input() wildCard: string;

  constructor() { }

  ngOnInit() {
  }
}
