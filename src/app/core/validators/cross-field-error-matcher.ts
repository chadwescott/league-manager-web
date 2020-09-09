import { ErrorStateMatcher } from '@angular/material/core';
import { FormGroupDirective, NgForm, FormControl } from '@angular/forms';

export class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return (control.touched || form.submitted) && (form.invalid || control.invalid);
  }
}
