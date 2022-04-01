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
import { PublicationColorDirective } from './directives/publication-color.directive';

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
];

@NgModule({
  declarations: [CardComponent, FlexCenterDirective, PublicationColorDirective],
  imports: [CommonModule, ...materialModules],
  exports: [CardComponent, ...materialModules, FlexCenterDirective],
})
export class SharedModule {}
