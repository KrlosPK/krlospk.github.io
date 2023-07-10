import { Component } from '@angular/core';
import { Link } from 'src/app/shared/types/shared.types';

@Component({
  selector: 'shared-buttons',
  templateUrl: './buttons.component.html',
  styles: [],
})
export class ButtonsComponent {
  public links: Link[] = [
    {
      alt: 'Enlace para mi curriculum',
      href: 'https://krlospk.github.io/assets/documents/HV_CARLOS_EDUARDO_MORALES_ESTRADA.pdf',
      img: './assets/logotypes/link.svg',
      styles: 'bg-custom-200 hover:bg-custom-700',
      text: 'Curriculum',
    },
    {
      alt: 'Logo de LinkedIn',
      href: 'https://www.linkedin.com/in/krlos-morales/',
      img: './assets/logotypes/linkedin.svg',
      styles: 'bg-custom-300 hover:bg-custom-600',
      text: 'LinkedIn',
    },
    {
      alt: 'Logo de LinkedIn',
      href: 'https://github.com/KrlosPK',
      img: './assets/logotypes/github.svg',
      styles: 'bg-gray-700 [&>img]:invert hover:bg-gray-800',
      text: 'GitHub',
    },
  ];
}
