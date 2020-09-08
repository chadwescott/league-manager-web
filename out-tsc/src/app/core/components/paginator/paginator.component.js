import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
let PaginatorComponent = class PaginatorComponent {
    constructor() {
        this.firstDisabled = false;
        this.previousDisabled = false;
        this.nextDisabled = false;
        this.lastDisabled = false;
        this.first = new EventEmitter();
        this.previous = new EventEmitter();
        this.next = new EventEmitter();
        this.last = new EventEmitter();
    }
    ngOnInit() {
    }
    onFirst() {
        this.first.emit();
    }
    onPrevious() {
        this.previous.emit();
    }
    onNext() {
        this.next.emit();
    }
    onLast() {
        this.last.emit();
    }
    onKeyup(event) {
        switch (event.key) {
            case 'ArrowUp':
                if (event.ctrlKey) {
                    this.first.emit();
                }
                break;
            case 'ArrowLeft':
                if (event.ctrlKey) {
                    this.previous.emit();
                }
                break;
            case 'ArrowRight':
                if (event.ctrlKey) {
                    this.next.emit();
                }
                break;
            case 'ArrowDown':
                if (event.ctrlKey) {
                    this.last.emit();
                }
                break;
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], PaginatorComponent.prototype, "firstDisabled", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], PaginatorComponent.prototype, "previousDisabled", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], PaginatorComponent.prototype, "nextDisabled", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], PaginatorComponent.prototype, "lastDisabled", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], PaginatorComponent.prototype, "first", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], PaginatorComponent.prototype, "previous", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], PaginatorComponent.prototype, "next", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], PaginatorComponent.prototype, "last", void 0);
PaginatorComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-paginator',
        templateUrl: './paginator.component.html',
        styleUrls: ['./paginator.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], PaginatorComponent);
export { PaginatorComponent };
//# sourceMappingURL=paginator.component.js.map