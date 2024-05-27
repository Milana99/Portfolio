import { Component, Input, Output } from '@angular/core';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input()
  project: Project = new Project();

}
