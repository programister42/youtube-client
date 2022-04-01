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

const materialModules = [
  MatCardModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatChipsModule,
];

@NgModule({
  declarations: [CardComponent, FlexCenterDirective],
  imports: [CommonModule, ...materialModules],
  exports: [CardComponent, ...materialModules, FlexCenterDirective],
})
export class SharedModule {}
