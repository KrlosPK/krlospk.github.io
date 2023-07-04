import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-responsive-navbar',
  templateUrl: './responsive-navbar.component.html',
  styles: [],
})
export class ResponsiveNavbarComponent {
  @Input()
  public isCollapsed: boolean = false;

  collapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
