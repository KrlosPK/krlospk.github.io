import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClickOutsideDirective } from './directives/click-outside.directive';

import { ButtonComponent } from './components/button/button.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';
import { ResponsiveNavbarComponent } from './components/responsive-navbar/responsive-navbar.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonsComponent,
    ClickOutsideDirective,
    NavbarComponent,
    NavbarItemComponent,
    ResponsiveNavbarComponent,
  ],
  imports: [CommonModule],
  exports: [ButtonsComponent, NavbarComponent],
})
export class SharedModule {}
