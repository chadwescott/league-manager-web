export const passwordConfirmationValidator = (control) => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password && confirmPassword && password.value !== confirmPassword.value ? { 'passwordConfirmationFailed': true } : null;
};
//# sourceMappingURL=password-confirmation-validator.js.map