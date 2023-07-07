import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClickOutsideDirective } from './directives/click-outside.directive';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';
import { ResponsiveNavbarComponent } from './components/responsive-navbar/responsive-navbar.component';

@NgModule({
  declarations: [
    ClickOutsideDirective,
    NavbarComponent,
    NavbarItemComponent,
    ResponsiveNavbarComponent,
  ],
  imports: [CommonModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
