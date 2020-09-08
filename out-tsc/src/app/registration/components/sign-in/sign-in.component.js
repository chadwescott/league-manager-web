import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
let SignInComponent = class SignInComponent {
    constructor() { }
    ngOnInit() {
        this.signInForm = new FormGroup({
            'email': new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            'password': new FormControl('', [
                Validators.required,
                Validators.minLength(8),
            ]),
        });
    }
    get email() { return this.signInForm.get('email'); }
    get password() { return this.signInForm.get('password'); }
    signIn() {
        console.log(`sign in as ${this.email.value} / ${this.password.value}`);
    }
};
SignInComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-sign-in',
        templateUrl: './sign-in.component.html',
        styleUrls: ['./sign-in.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], SignInComponent);
export { SignInComponent };
//# sourceMappingURL=sign-in.component.js.map