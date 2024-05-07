import { Component, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { AboutItem } from 'src/app/model/aboutItem';
import { Person } from 'src/app/model/person';
import { FunctionsService } from 'src/app/services/functions.service';
import { PersonService } from 'src/app/services/personService/person.service';


@Component({
  selector: 'app-secound-page',
  templateUrl: './secound-page.component.html',
  styleUrls: ['./secound-page.component.css']
})
export class SecoundPageComponent implements OnChanges {
  person: Person = new Person;
  about: AboutItem[] = [];
  @Input()
  spActive: boolean = false;

  constructor(private functions: FunctionsService, private personService: PersonService) {
    this.person = personService.readPerson()
    this.about = this.person.about;

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.spActive == true)
      this.functions.startTypingEffect('Something about my...', '#mySpeech2')
  }

}
