import { Component, OnInit } from '@angular/core';
import { NgModel, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'lm-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

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

  get email(): AbstractControl { return this.signInForm.get('email'); }

  get password(): AbstractControl { return this.signInForm.get('password'); }

  signIn(): void {
    console.log(`sign in as ${this.email.value} / ${this.password.value}`);
  }
}
