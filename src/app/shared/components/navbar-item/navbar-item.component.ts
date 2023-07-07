import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input()
  public tabindex: boolean = false;
  @Output()
  public isCollapsed: EventEmitter<boolean> = new EventEmitter();

  public handleClick(): void {
    console.log(this.tabindex);
    this.isCollapsed.emit(false);
  }
}
