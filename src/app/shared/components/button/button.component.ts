import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styles: [],
})
export class ButtonComponent {
  @Input()
  public alt: string = '';
  @Input()
  public href: string = '';
  @Input()
  public img: string = '';
  @Input()
  public styles: string = '';
  @Input()
  public text: string = '';
}
