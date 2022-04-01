import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/serch-bar/search-bar.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, SearchBarComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, FormsModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
