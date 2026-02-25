import { ProjectsService } from './../../services/projects';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../../services/projects';

@Component({
  selector: 'app-projects',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  projects: Project[];

  constructor(private projectService: ProjectsService){
    this.projects = this.projectService.getProjects();
  }
}
