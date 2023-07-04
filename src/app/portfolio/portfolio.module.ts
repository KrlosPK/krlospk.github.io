import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    ContactMeComponent,
    EducationComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
  imports: [CommonModule],
  exports: [
    AboutMeComponent,
    ContactMeComponent,
    EducationComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
})
export class PortfolioModule {}
