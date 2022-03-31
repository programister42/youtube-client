import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/serch-bar/search-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, SearchBarComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
