import { Component } from '@angular/core';

import { Education, Experience } from '../../types/portfolio-types';

import educationList from '../../jsons/education-list.json';
import experienceList from '../../jsons/experience-list.json';

@Component({
  selector: 'portfolio-education',
  templateUrl: './education.component.html',
  styles: [],
})
export class EducationComponent {
  public educationList: Education[] = educationList;
  public experienceList: Experience[] = experienceList;
}
