import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: '', component: HeroComponent},
    {path: '1', component: AboutMeComponent},
    {path: '2', component: SkillsComponent},
    {path: '3', component: ProjectsComponent},
    {path: '4', component: HobbiesComponent},
    {path: '5', component: ContactComponent}
];
