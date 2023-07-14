import { Component } from '@angular/core';

import { Projects } from '../../types/portfolio-types';

import projects from '../../jsons/projects.json';

@Component({
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styles: [],
})
export class ProjectsComponent {
  public projects: Projects[] = projects;
}
