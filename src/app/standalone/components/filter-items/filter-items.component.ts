import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Projects } from 'src/app/portfolio/types/portfolio-types';

@Component({
  selector: 'standalone-filter-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-items.component.html',
  styles: [
    `
      .active {
        background-color: rgb(55, 65, 81);
      }
    `,
  ],
})
export class FilterItemsComponent implements OnInit {
  @Input()
  public items: Projects[] = [];
  @Output()
  public itemsFiltered = new EventEmitter<Projects[]>();

  public technologies: string[] = [];
  public activeTech: string = '';

  public originalItems: Projects[] = [];

  ngOnInit(): void {
    this.originalItems = [...this.items];
    this.extractTechnologies();
  }

  filter(technologies: string): void {
    this.activeTech = technologies;

    const filteredItems = this.items.filter((item) => {
      return item.technologies.includes(this.activeTech);
    });

    this.itemsFiltered.emit(filteredItems);
  }

  clearFilter(): void {
    this.activeTech = '';
    this.itemsFiltered.emit(this.originalItems);
  }

  extractTechnologies(): void {
    const uniqueTechnologies = new Set<string>();

    this.items.forEach((item) => {
      item.technologies.forEach((tech) => uniqueTechnologies.add(tech));
    });

    const sortedTechnologies = Array.from(uniqueTechnologies).sort();

    this.technologies = Array.from(sortedTechnologies);
  }
}
