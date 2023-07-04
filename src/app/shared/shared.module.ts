import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarItemComponent
  ],
  imports: [CommonModule],
})
export class SharedModule {}
