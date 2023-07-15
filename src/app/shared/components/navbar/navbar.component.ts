import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .portfolio-fixed {
        box-shadow: #f7ffffa1 0px 1px 10px 0px;
        position: fixed;
      }
    `,
  ],
})
export class NavbarComponent {
  public isResponsiveNav: boolean = false;
  public fixed: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.querySelector('header');
    this.fixed = window.scrollY > 0;
    header?.classList.toggle('portfolio-fixed', this.fixed);
  }

  toggle(): void {
    this.isResponsiveNav = !this.isResponsiveNav;
  }

  clickedOutside(): void {
    this.isResponsiveNav = false;
  }

  handleCollapsedChange(event: boolean): void {
    this.isResponsiveNav = event;
  }
}
