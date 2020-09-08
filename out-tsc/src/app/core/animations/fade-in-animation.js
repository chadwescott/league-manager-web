import { animation, style, animate } from '@angular/animations';
export const fadeInAnimation = animation([
    style({ opacity: 0 }),
    animate('{{ timings }}', style({ opacity: 1 }))
]);
//# sourceMappingURL=fade-in-animation.js.map