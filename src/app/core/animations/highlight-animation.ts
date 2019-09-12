import { animation, style, animate, keyframes } from '@angular/animations';
import { Colors } from './colors';

export const highlightAnimation = animation([
    style('*'),
    animate('{{ timings }}', keyframes([
        style({ background: Colors.highlightColor, offset: 0.25 }),
        style({ background: '*', offset: 0.5 }),
        style({ background: Colors.highlightColor, offset: 0.75 }),
        style({ background: '*', offset: 1.0 })
    ]))
]);