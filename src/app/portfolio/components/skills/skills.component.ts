import { Component } from '@angular/core';

import { Skills } from '../../types/portfolio-types';

import skills from '../../jsons/skills.json';

@Component({
  selector: 'portfolio-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  public skills: Skills[] = [...skills, ...skills];
}
