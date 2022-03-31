import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';

const materialModules = [MatCardModule];

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, ...materialModules],
  exports: [CardComponent, ...materialModules],
})
export class SharedModule {}
