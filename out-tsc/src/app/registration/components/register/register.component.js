import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { CrossFieldErrorMatcher } from 'src/app/core/validators/cross-field-error-matcher';
import { passwordConfirmationValidator } from 'src/app/core/validators/password-confirmation-validator';
let RegisterComponent = class RegisterComponent {
    constructor(_formBulder) {
        this._formBulder = _formBulder;
        this.passwordConfirmationErrorMatcher = new CrossFieldErrorMatcher();
    }
    ngOnInit() {
        this.registrationForm = this._formBulder.group({
            'email': new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            'password': new FormControl('', [
                Validators.required,
                Validators.minLength(8),
            ]),
            'confirmPassword': new FormControl('', [
                Validators.required,
                Validators.minLength(8),
            ])
        }, { validators: passwordConfirmationValidator });
    }
    get email() { return this.registrationForm.get('email'); }
    get password() { return this.registrationForm.get('password'); }
    get confirmPassword() { return this.registrationForm.get('confirmPassword'); }
    register() {
        console.log(this.password.errors);
        console.log(`registering as ${this.email.value} / ${this.password.value}`);
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'lm-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder])
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map