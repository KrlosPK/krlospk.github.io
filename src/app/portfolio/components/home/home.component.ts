import { Component } from '@angular/core';

import { Link } from '../../types/home.types';

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styles: [
    `
      #name {
        background-image: linear-gradient(to left, #6190E8 40%, #ffc888);
      }
      @media screen and (min-width: 768px) {
        #arrow_down {
          width: 40px;
        }
      }
    `,
  ],
})
export class HomeComponent {
  public links: Link[] = [
    {
      alt: 'Enlace para mi curriculum',
      href: 'https://krlospk.github.io/assets/images/HV_CARLOS_EDUARDO_MORALES_ESTRADA.pdf',
      img: './assets/images/link.svg',
      styles: 'bg-custom-200 hover:bg-custom-700',
      text: 'Curriculum',
    },
    {
      alt: 'Logo de LinkedIn',
      href: 'https://www.linkedin.com/in/krlos-morales/',
      img: './assets/images/linkedin.svg',
      styles: 'bg-custom-300 hover:bg-custom-600',
      text: 'LinkedIn',
    },
    {
      alt: 'Logo de LinkedIn',
      href: 'https://github.com/KrlosPK',
      img: './assets/images/github.svg',
      styles:
        'bg-gray-700 [&>img]:invert hover:bg-gray-800',
      text: 'GitHub',
    },
  ];
}
