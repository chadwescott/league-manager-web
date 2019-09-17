import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { highlightAnimation } from 'src/app/core/animations/highlight-animation';
import { Colors } from 'src/app/core/colors';

@Component({
  selector: 'lm-wild-card-indicator',
  templateUrl: './wild-card-indicator.component.html',
  styleUrls: ['./wild-card-indicator.component.scss'],
  animations: [
    trigger('wildCardChanged', [
      transition('* => *', [
        useAnimation(highlightAnimation, {
          params: { timings: '500ms linear', highlightColor: Colors.highlightColor }
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
