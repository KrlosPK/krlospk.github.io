import { Component } from '@angular/core';

import { Education } from '../../types/portfolio-types';

import educationList from '../../jsons/educationList.json';

@Component({
  selector: 'portfolio-education',
  templateUrl: './education.component.html',
  styles: [],
})
export class EducationComponent {
  public educationList: Education[] = educationList;
}
