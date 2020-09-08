import { animation, style, animate } from '@angular/animations';
export const fadeOutAnimation = animation([
    style({ opacity: 1 }),
    animate('{{ timings }}', style({ opacity: 0 }))
]);
//# sourceMappingURL=fade-out-animation.js.map