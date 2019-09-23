import { animation, style, animate, keyframes, group } from '@angular/animations';

export const HIGHLIGHT_ANIMATION = animation([
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

// this animation scrolls the content out of view to the right and then comes back in from the left
export const FADE_RIGHT_ANIMATION = animation([
    style({ transform: 'translateX(0)' }),
    animate('{{ timings }}', keyframes([
        style({ transform: 'translateX(100%)', offset: 0.50 }),
        style({ transform: 'translateX(-100%)', offset: 0.51 }),
        style({ transform: 'translateX(0%)', offset: 1 })
    ]))
]);

// this animation scrolls the content out of view to the left and then comes back in from the right
export const FADE_LEFT_ANIMATION = animation([
    style({ transform: 'translateX(0)' }),
    animate('{{ timings }}', keyframes([
        style({ transform: 'translateX(-100%)', offset: 0.50 }),
        style({ transform: 'translateX(100%)', offset: 0.51 }),
        style({ transform: 'translateX(0%)', offset: 1 })
    ]))
]);

export const FADE_IN_ANIMATION = animation([
    style({ transform: 'scale(0)', opacity: 0 }),
    animate('{{ timings }}', style({ transform: 'scale(1)', opacity: 1 }))
]);

export const FADE_OUT_ANIMATION = animation([
    style({ transform: 'scale(1)', opacity: 1 }),
    animate('{{ timings }}', style({ transform: 'scale(0)', opacity: 0 }))
]);

export const FADE_IN_TOP_ANIMATION = animation([
    style({ transform: 'translateY(-100%)', opacity: 0 }),
    animate('{{ timings }}', style({ transform: 'translateY(0%)', opacity: 1 }))
]);

export const FADE_OUT_TOP_ANIMATION = animation([
    style({ transform: 'translateY(0%)', opacity: 1 }),
    animate('{{ timings }}', style({ transform: 'translateY(-100%)', opacity: 0 }))
]);

export const SCALE_IN_VERTICAL_ANIMATION = animation([
    style({ transform: 'scaleY(0)', opacity: 1 }),
    animate('{{ timings }}', style({ transform: 'scaleY(1)' }))
]);

export const SCALE_OUT_VERTICAL_ANIMATION = animation([
    style({ transform: 'scaleY(1)', opacity: 1 }),
    animate('{{ timings }}', style({ transform: 'scaleY(0)' }))
]);

export const SCALE_HORIZONTAL_ANIMATION = animation([
    style({ transform: 'scaleX(0)', opacity: 1 }),
    animate('{{ timings }}', style({ transform: 'scaleX(1)' }))
]);

export const SCALE_OUT_HORIZONTAL_ANIMATION = animation([
    style({ transform: 'scaleX(1)', opacity: 1 }),
    animate('{{ timings }}', style({ transform: 'scaleX(0)' }))
]);

export const ROTATE_X_ANIMATION = animation([
    style({ transform: 'rotateX(180deg)', opacity: 1 }),
    animate('{{ timings }}', style({ transform: 'rotateX(0deg)' }))
]);

export const ROTATE_Y_ANIMATION = animation([
    style({ transform: 'rotateY(180deg)', opacity: 1 }),
    animate('{{ timings }}', style({ transform: 'rotateY(0deg)' }))
]);

export const ROTATE_Z_ANIMATION = animation([
    style({ transform: 'rotateZ(180deg)', opacity: 1 }),
    animate('{{ timings }}', style({ transform: 'rotateZ(0deg)' }))
]);
