import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { COLORS } from 'src/app/core/constants/colors';
import { HIGHLIGHT_TIMING } from 'src/app/core/constants/timings';
import { HIGHLIGHT_ANIMATION } from 'src/app/core/constants/animations';

@Component({
  selector: 'lm-wild-card-indicator',
  templateUrl: './wild-card-indicator.component.html',
  styleUrls: ['./wild-card-indicator.component.scss'],
  animations: [
    trigger('wildCardChanged', [
      transition('* => *', [
        useAnimation(HIGHLIGHT_ANIMATION, {
          params: { timings: HIGHLIGHT_TIMING, highlightColor: COLORS.HIGHLIGHT_COLOR }
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
