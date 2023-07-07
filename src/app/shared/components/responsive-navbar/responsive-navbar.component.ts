import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  handleCollapse(event: boolean): void {
    this.isCollapsed = event;
    this.isCollapsedChange.emit(event);
  }
}
