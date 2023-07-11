import { Component } from '@angular/core';

import { Education } from '../../types/types.d';

@Component({
  selector: 'portfolio-education',
  templateUrl: './education.component.html',
  styles: [],
})
export class EducationComponent {
  public educationList: Education[] = [
    {
      endDate: 'Noviembre 2023',
      initialDate: 'Febrero 2022',
      institute: 'SENA',
      timeDifference: '1 año y 9 meses',
      title: 'Tecnólogo en Análisis y Desarrollo de Software',
    },
    {
      endDate: 'Noviembre 2021',
      initialDate: 'Febrero 2020',
      institute: 'SENA',
      timeDifference: '1 año y 9 meses',
      title: 'Técnico en Programación de Software',
    },
    {
      duration: '96 horas',
      endDate: 'Diciembre 2022',
      initialDate: 'Diciembre 2022',
      institute: 'SENA',
      timeDifference: '1 mes',
      title: 'Curso Desarrollo de Programas Aplicando Metodología POO',
    },
  ];
}
