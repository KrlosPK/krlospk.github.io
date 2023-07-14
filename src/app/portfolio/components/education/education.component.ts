import { Component } from '@angular/core';

import { Education } from '../../types/portfolio-types';

@Component({
  selector: 'portfolio-education',
  templateUrl: './education.component.html',
  styles: [],
})
export class EducationComponent {
  public educationList: Education[] = [
    {
      endDate: 'Actualidad',
      initialDate: 'Febrero 2022',
      institute: 'SENA',
      title: 'Tecnólogo en Análisis y Desarrollo de Software',
    },
    {
      endDate: 'Noviembre 2021',
      href: 'https://krlospk.github.io/assets/documents/Titulo_tecnica_prg.pdf',
      initialDate: 'Febrero 2020',
      institute: 'SENA',
      timeDifference: '1 año y 9 meses',
      title: 'Técnico en Programación de Software',
    },
    {
      duration: '96 horas',
      href: 'https://krlospk.github.io/assets/documents/Curso_POO.pdf',
      initialDate: 'Diciembre 2022',
      institute: 'SENA',
      title: 'Curso Desarrollo de Programas Aplicando Metodología POO',
    },
    {
      duration: '77 horas',
      endDate: 'Junio 2023',
      href: 'https://krlospk.github.io/assets/documents/OracleNextEducation_Front.pdf',
      initialDate: 'Mayo 2023',
      institute: 'Oracle Next Education - Alura Latam',
      title: 'Curso Desarrollo Frontend',
    },
  ];
}
