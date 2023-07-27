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
  public filteredProjects: Projects[] = projects;
  public visibleProjects: Projects[] = projects.slice(0, 6);
  public showMoreButtonVisible: boolean = true;

  handleFilteredItems(filteredProjects: Projects[]): void {
    this.visibleProjects = filteredProjects;
  }

  showMoreProjects(): void {
    const remainingItemsToShow = 3;

    const remainingProjects = this.filteredProjects.slice(
      this.visibleProjects.length
    );

    this.visibleProjects = this.visibleProjects.concat(
      remainingProjects.slice(0, remainingItemsToShow)
    );

    this.showMoreButtonVisible =
      remainingProjects.length > remainingItemsToShow;
  }
}
