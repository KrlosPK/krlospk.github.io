import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent {
  public isResponsiveNav: boolean = false;

  toggle(): void {
    this.isResponsiveNav = !this.isResponsiveNav;
  }

  clickedOutside(): void {
    this.isResponsiveNav = false;
  }
}
