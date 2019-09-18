import { animation, style, animate } from '@angular/animations';

export const FADE_OUT_ANIMATION = animation([
    style({ transform: 'scale(1)', opacity: 1 }),
    animate('{{ timings }}', style({ transform: 'scale(0)', opacity: 0 }))
]);
