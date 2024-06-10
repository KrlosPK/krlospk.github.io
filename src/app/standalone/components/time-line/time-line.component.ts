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

  getMonthNumber(month: string): number {
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    return months.indexOf(month);
  }

  parseDate(dateStr: string) {
    const [month, year] = dateStr.split(' ');
    return new Date(parseInt(year), this.getMonthNumber(month));
  }

  calculateDuration(startDate: string, endDate: string): string {
    const start = this.parseDate(startDate);
    const end =
      endDate.toLowerCase() === 'actualidad'
        ? new Date()
        : this.parseDate(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    months++;

    let result = '';
    if (years > 0) {
      result += years + (years > 1 ? ' años ' : ' año ');
    }
    if (months > 0) {
      result += months + (months > 1 ? ' meses' : ' mes');
    }
    return result.trim();
  }
}
