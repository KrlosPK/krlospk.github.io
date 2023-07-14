import { Component } from '@angular/core';

import { Skills } from '../../types/portfolio-types';

import skills from '../../jsons/skills.json';

@Component({
  selector: 'portfolio-skills',
  templateUrl: './skills.component.html',
  styles: [],
})
export class SkillsComponent {
  public skills: Skills[] = skills;
}
