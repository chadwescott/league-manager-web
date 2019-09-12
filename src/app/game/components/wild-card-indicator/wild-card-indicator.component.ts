import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInAnimation } from 'src/app/core/animations/fade-in-animation';
import { fadeOutAnimation } from 'src/app/core/animations/fade-out-animation';
import { highlightAnimation } from 'src/app/core/animations/highlight-animation';

@Component({
  selector: 'lm-wild-card-indicator',
  templateUrl: './wild-card-indicator.component.html',
  styleUrls: ['./wild-card-indicator.component.scss'],
  animations: [
    trigger('wildCardChanged', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: { timings: '800ms ease-in-out' }
        })
      ]),
      transition(':leave', [
        useAnimation(fadeOutAnimation, {
          params: { timings: '800ms ease-in-out' }
        })
      ]),
    ]),
    trigger('foo', [
      transition('* => *', [
        useAnimation(highlightAnimation, {
          params: { timings: '800ms ease-in-out' }
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
