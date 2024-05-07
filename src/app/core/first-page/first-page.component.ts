import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Person } from 'src/app/model/person';
import { FunctionsService } from 'src/app/services/functions.service';
import { PersonService } from 'src/app/services/personService/person.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit, OnChanges {

  person: Person = new Person;
  @Input()
  fpActive: boolean = false;

  constructor(private functions: FunctionsService, private personService: PersonService) {
    this.person = personService.readPerson();
  }
  ngOnInit(): void {
    this.functions.startTypingEffect('Hi, I am', '#mySpeech1')
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}
