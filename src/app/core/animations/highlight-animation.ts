import { animation, style, animate, keyframes, group } from '@angular/animations';

export const highlightAnimation = animation([
    style('*'),
    group([
        animate('{{ timings }}', keyframes([
            style({ background: '{{highlightColor}}', offset: 0.5 }),
            style({ background: '*', offset: 1.0 })
        ])),
        animate('{{ timings }}', keyframes([
            style({ transform: 'rotateY(-90deg) scale(1.25)', offset: 0.25 }),
            style({ transform: 'rotateY(0deg) scale(1.5)', offset: 0.50 }),
            style({ transform: 'rotateY(90deg) scale(1.25)', offset: 0.75 }),
            style({ transform: 'rotateY(0deg) scale(1)', offset: 1 }),
        ]))
    ])
]);
