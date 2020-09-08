export class CrossFieldErrorMatcher {
    isErrorState(control, form) {
        return (control.touched || form.submitted) && (form.invalid || control.invalid);
    }
}
//# sourceMappingURL=cross-field-error-matcher.js.map