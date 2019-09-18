import { animation, style, animate, keyframes } from '@angular/animations';

// this animation scrolls the content out of view to the left and then comes back in from the right
export const FADE_LEFT_ANIMATION = animation([
    style({ transform: 'translateX(0)' }),
    animate('{{ timings }}', keyframes([
        style({ transform: 'translateX(-100%)', offset: 0.50 }),
        style({ transform: 'translateX(100%)', offset: 0.51 }),
        style({ transform: 'translateX(0%)', offset: 1 })
    ]))
]);

