import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateBeforeCurrentValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const date: Date = new Date(control.value);
		return date.getTime() < Date.now() ? null : { dateBeforeCurrent: date };
	};
}
