import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-footer',
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent {
  public date: string = '';

  constructor() {
    this.date = new Date().getFullYear().toString();
  }
}
