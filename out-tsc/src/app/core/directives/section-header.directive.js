import * as tslib_1 from "tslib";
import { Directive, ElementRef } from '@angular/core';
let SectionHeaderDirective = class SectionHeaderDirective {
    constructor(el) {
        el.nativeElement.classList.add('section-header');
    }
};
SectionHeaderDirective = tslib_1.__decorate([
    Directive({
        selector: '[lmSectionHeader]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], SectionHeaderDirective);
export { SectionHeaderDirective };
//# sourceMappingURL=section-header.directive.js.map