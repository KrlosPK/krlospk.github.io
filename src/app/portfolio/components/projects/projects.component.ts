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
  public isAllFilter: boolean = true;

  handleFilteredItems(filteredProjects: Projects[]): void {
    this.visibleProjects = filteredProjects;
  }

  handleIsAllFilter(isAllFilter: boolean): void {
    this.isAllFilter = isAllFilter;

    if (isAllFilter) {
      this.visibleProjects = projects.slice(0, 6);
      this.showMoreButtonVisible = true;
    }
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
