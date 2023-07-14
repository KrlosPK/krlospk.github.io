import { Component } from '@angular/core';
import { Skills } from '../../types/portfolio-types';

@Component({
  selector: 'portfolio-skills',
  templateUrl: './skills.component.html',
  styles: [],
})
export class SkillsComponent {
  public skills: Skills[] = [
    {
      label: 'Angular',
      img: './assets/icons/angular.svg',
      alt: 'Angular logotype',
    },
    { label: 'React', img: './assets/icons/react.svg', alt: 'React logotype' },
    {
      label: 'TypeScript',
      img: './assets/icons/typescript.svg',
      alt: 'TypeScript logotype',
    },
    {
      label: 'JavaScript',
      img: './assets/icons/javascript.svg',
      alt: 'JavaScript logotype',
    },
    {
      label: 'TailwindCSS',
      img: './assets/icons/tailwindcss.svg',
      alt: 'TailwindCSS logotype',
    },
    { label: 'MySQL', img: './assets/icons/mysql.svg', alt: 'MySQL logotype' },
    { label: 'Git', img: './assets/icons/git.svg', alt: 'Git logotype' },
    { label: 'SASS', img: './assets/icons/sass.svg', alt: 'SASS logotype' },
  ];
}
