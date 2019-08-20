import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { CrossFieldErrorMatcher } from 'src/app/core/validators/cross-field-error-matcher';
import { passwordConfirmationValidator } from 'src/app/core/validators/password-confirmation-validator';

@Component({
  selector: 'lm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  passwordConfirmationErrorMatcher = new CrossFieldErrorMatcher();

  constructor(private _formBulder: FormBuilder) { }

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
    },
      { validators: passwordConfirmationValidator });
  }

  get email(): AbstractControl { return this.registrationForm.get('email'); }

  get password(): AbstractControl { return this.registrationForm.get('password'); }

  get confirmPassword(): AbstractControl { return this.registrationForm.get('confirmPassword'); }

  register(): void {
    console.log(this.password.errors);
    console.log(`registering as ${this.email.value} / ${this.password.value}`);
  }
}
