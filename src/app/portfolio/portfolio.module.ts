import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { EducationComponent } from './components/education/education.component';
import { FilterItemsComponent } from '../standalone/components/filter-items/filter-items.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TimeLineComponent } from '../standalone/components/time-line/time-line.component';

@NgModule({
  declarations: [
    EducationComponent,
    FooterComponent,
    HomeComponent,
    ProjectCardComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
  imports: [
    CommonModule,
    FilterItemsComponent,
    SharedModule,
    TimeLineComponent,
  ],
  exports: [
    EducationComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
})
export class PortfolioModule {}
