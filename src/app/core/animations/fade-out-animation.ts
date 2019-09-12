import { animation, style, animate } from '@angular/animations';

export const fadeOutAnimation = animation([
    style({ transform: 'scale(1)', opacity: 1 }),
    animate('{{ timings }}', style({ transform: 'scale(0)', opacity: 0 }))
]);
