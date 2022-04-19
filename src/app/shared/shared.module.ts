import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexCenterDirective } from './directives/flex-center.directive';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PublicationColorDirective } from './directives/publication-color.directive';
import { ChipIconDirective } from './directives/chip-icon.directive';
import { PasswordValidatorDirective } from './validators/password-validator.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { ErrorHintDirective } from './directives/error-hint.directive';

const materialModules = [
	MatCardModule,
	MatToolbarModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatButtonModule,
	MatChipsModule,
	MatGridListModule,
	MatDividerModule,
	MatProgressBarModule,
	MatListModule,
	MatDatepickerModule,
	MatNativeDateModule,
];

@NgModule({
	declarations: [
		CardComponent,
		FlexCenterDirective,
		PublicationColorDirective,
		ChipIconDirective,
		PasswordValidatorDirective,
		ErrorHintDirective,
	],
	imports: [CommonModule, ...materialModules, ReactiveFormsModule],
	exports: [
		CardComponent,
		...materialModules,
		FlexCenterDirective,
		ChipIconDirective,
		PublicationColorDirective,
		PasswordValidatorDirective,
		ErrorHintDirective,
		ReactiveFormsModule,
	],
})
export class SharedModule {}
