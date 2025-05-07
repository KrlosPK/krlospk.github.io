import { Component } from '@angular/core';

import { type Link } from 'src/app/shared/types/shared-types';

@Component({
  selector: 'shared-buttons',
  templateUrl: './buttons.component.html',
  styles: [],
})
export class ButtonsComponent {
  public links: Link[] = [
    {
      alt: 'Enlace para mi currículum',
      href: 'https://docs.google.com/document/d/15_8WCNTCITg7zNHqPVXaDgnPyKogjd1spUzqxaa61wE/edit?usp=sharing',
      img: './assets/logotypes/link.svg',
      styles: 'bg-custom-200 hover:bg-custom-700',
      text: 'Currículum',
    },
    {
      alt: 'Logo de LinkedIn',
      href: 'https://www.linkedin.com/in/krlos-morales/',
      img: './assets/logotypes/linkedin.svg',
      styles: 'bg-custom-300 hover:bg-custom-600',
      text: 'LinkedIn',
    },
    {
      alt: 'Logo de GitHub',
      href: 'https://github.com/KrlosPK',
      img: './assets/logotypes/github.svg',
      styles: 'bg-gray-700 [&>img]:invert hover:bg-gray-800',
      text: 'GitHub',
    },
  ];
}
