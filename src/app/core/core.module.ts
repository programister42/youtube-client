import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './header/serch-bar/search-bar.component';

@NgModule({
  declarations: [HeaderComponent, SearchBarComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
