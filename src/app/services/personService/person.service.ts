import { Injectable } from '@angular/core';
import { PERSON } from 'src/app/data/personData';
import { Person } from 'src/app/model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private person: Person = new Person;

  constructor() {
    this.person.id = Number(PERSON.id);
    this.person.name = PERSON.name.toUpperCase();
    this.person.occupation = PERSON.occupation;
    this.person.description = PERSON.description;
    this.person.about = PERSON.about;
  }

  readPerson(): Person {
    return this.person;
  }
}
