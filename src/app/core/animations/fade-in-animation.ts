import { animation, style, animate } from '@angular/animations';

export const FADE_IN_ANIMATION = animation([
    style({ transform: 'scale(0)', opacity: 0 }),
    animate('{{ timings }}', style({ transform: 'scale(1)', opacity: 1 }))
]);
