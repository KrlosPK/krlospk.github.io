import { Component } from '@angular/core';

import { type Link } from 'src/app/shared/types/shared-types';

import links from '../../jsons/links.json';

@Component({
  selector: 'shared-buttons',
  templateUrl: './buttons.component.html',
  styles: [],
})
export class ButtonsComponent {
  public links: Link[] = links;
}
