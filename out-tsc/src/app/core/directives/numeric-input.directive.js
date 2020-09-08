import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener } from '@angular/core';
let NumericInputDirective = class NumericInputDirective {
    constructor(_el) {
        this._el = _el;
    }
    onInputChange(event) {
        const initalValue = this._el.nativeElement.value;
        const noNumberValue = initalValue.replace(/[^0-9-.]*/g, '');
        if (initalValue !== noNumberValue) {
            this._el.nativeElement.value = noNumberValue;
            event.stopPropagation();
        }
    }
};
tslib_1.__decorate([
    HostListener('input', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], NumericInputDirective.prototype, "onInputChange", null);
NumericInputDirective = tslib_1.__decorate([
    Directive({
        selector: '[lmNumericInput]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], NumericInputDirective);
export { NumericInputDirective };
//# sourceMappingURL=numeric-input.directive.js.map