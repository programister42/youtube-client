import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
	selector: '[appPasswordValidator]',
	providers: [{ provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true }],
})
export class PasswordValidatorDirective implements Validator {
	validate(control: AbstractControl): ValidationErrors | null {
		const password: string = control.value as string;
		const pswdRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#?])(?=.{8,})');
		return pswdRegex.test(password) ? null : { passwordValidator: { valid: false } };
	}
}
