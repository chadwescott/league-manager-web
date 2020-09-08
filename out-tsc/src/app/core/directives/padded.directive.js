import * as tslib_1 from "tslib";
import { Directive, ElementRef } from '@angular/core';
let PaddedDirective = class PaddedDirective {
    constructor(el) {
        el.nativeElement.classList.add('padded');
    }
};
PaddedDirective = tslib_1.__decorate([
    Directive({
        selector: '[lmPadded]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], PaddedDirective);
export { PaddedDirective };
//# sourceMappingURL=padded.directive.js.map