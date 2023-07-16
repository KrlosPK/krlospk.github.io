import { Component, HostListener } from '@angular/core';

import { NavItems } from '../../types/shared-types';

import links from '../../jsons/nav-items.json';

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
  public fixed: boolean = false;
  public isResponsiveNav: boolean = false;
  public links: NavItems[] = links;

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
