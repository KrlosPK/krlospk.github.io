import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-nav-item',
  templateUrl: './navbar-item.component.html',
  styles: [],
})
export class NavbarItemComponent {
  @Input()
  public href: string = '';
  @Input()
  public text: string = '';
}
