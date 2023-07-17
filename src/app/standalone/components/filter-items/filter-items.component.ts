import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Projects } from 'src/app/portfolio/types/portfolio-types';
import { TechnologyWithCount } from '../../types/standalone-types';

@Component({
  selector: 'standalone-filter-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-items.component.html',
  styles: [
    `
      .active {
        background-color: rgb(31, 41, 55);
      }
    `,
  ],
})
export class FilterItemsComponent implements OnInit {
  @Input()
  public items: Projects[] = [];
  @Output()
  public itemsFiltered = new EventEmitter<Projects[]>();

  public technologies: TechnologyWithCount[] = [];
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
    const technologyCountMap = new Map<string, number>();

    this.items.forEach((item) => {
      item.technologies.forEach((tech) => {
        const count = technologyCountMap.get(tech) || 0;

        technologyCountMap.set(tech, count + 1);
      });
    });

    this.technologies = Array.from(technologyCountMap.entries()).map(
      ([name, count]) => ({
        name,
        count,
      })
    );

    this.technologies.sort((a, b) => a.name.localeCompare(b.name));
  }
}
