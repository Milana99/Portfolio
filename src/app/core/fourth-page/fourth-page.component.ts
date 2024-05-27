import { AfterViewInit, Component, ElementRef, OnChanges, Renderer2, RendererFactory2, SimpleChanges, ViewChild } from '@angular/core';
import { Person } from 'src/app/model/person';
import { Project } from 'src/app/model/project';
import { PersonService } from 'src/app/services/personService/person.service';
declare var $: any;
@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.css']
})
export class FourthPageComponent implements OnChanges {

  person: Person = new Person()
  projects: Project[] = []

  constructor(private service: PersonService) {
    this.person = service.readPerson();
    this.projects = this.person.projects;
  }

  ngOnChanges(changes: SimpleChanges): void {

  }


}
