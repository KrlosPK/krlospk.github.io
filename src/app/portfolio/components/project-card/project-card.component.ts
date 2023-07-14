import { Component, Input } from '@angular/core';
import { Projects } from '../../types/portfolio-types';

@Component({
  selector: 'portfolio-project-card',
  templateUrl: './project-card.component.html',
  styles: [],
})
export class ProjectCardComponent {
  @Input()
  public project: Projects = {
    alt: '',
    description: '',
    repo: '',
    src: '',
    technologies: [''],
    title: '',
    url: '',
  };
}
