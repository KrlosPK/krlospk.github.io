import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationExperience } from '../../../portfolio/types/portfolio-types';

@Component({
  selector: 'standalone-time-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-line.component.html',
  styles: [],
})
export class TimeLineComponent {
  @Input()
  public text: string = '';
  @Input()
  public itemsList: EducationExperience[] = [];
}
