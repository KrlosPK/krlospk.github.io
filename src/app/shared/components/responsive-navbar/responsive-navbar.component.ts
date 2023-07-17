import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NavItems } from '../../types/shared-types';

import navItems from '../../jsons/nav-items.json';

@Component({
  selector: 'shared-responsive-navbar',
  templateUrl: './responsive-navbar.component.html',
  styles: [],
})
export class ResponsiveNavbarComponent {
  @Input()
  public isCollapsed: boolean = false;
  @Output()
  public isCollapsedChange: EventEmitter<boolean> = new EventEmitter();

  public navItems: NavItems[] = navItems.filter((item) => item.href !== '#');

  handleCollapse(event: boolean): void {
    this.isCollapsed = event;
    this.isCollapsedChange.emit(event);
  }
}
