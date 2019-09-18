import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, useAnimation, query, animateChild, animate, group, style } from '@angular/animations';
import { FADE_RIGHT_ANIMATION } from './core/animations/fade-right-animation';
import { FADE_LEFT_ANIMATION } from './core/animations/fade-left-animation';
import { TIMINGS } from './core/animations/timings';

@Component({
  selector: 'lm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeChanged', [
      transition('* => *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ left: '-100%' })
        ], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [
            animate(TIMINGS.FADE_IN_OUT_TIMING, style({ left: '100%' }))
          ], { optional: true }),
          query(':enter', [
            animate(TIMINGS.FADE_IN_OUT_TIMING, style({ left: '0%' }))
          ], { optional: true })
        ]),
        query(':enter', animateChild(), { optional: true })
      ])
    ])
  ]
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.isActivated && outlet.activatedRoute;
  }
}
