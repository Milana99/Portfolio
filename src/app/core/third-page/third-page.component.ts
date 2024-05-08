import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PLanguage } from 'src/app/model/pLanguage';
import { Person } from 'src/app/model/person';
import { FunctionsService } from 'src/app/services/functions.service';
import { PersonService } from 'src/app/services/personService/person.service';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnChanges {

  @Input()
  tpActive: boolean = false;

  programmingLanguages: PLanguage[] = []
  person = new Person;

  constructor(private functions: FunctionsService, private personService: PersonService) {
    this.person = personService.readPerson();
    this.programmingLanguages = this.person.programmingLanguages;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tpActive == true)
      this.functions.startTypingEffect('...and something about my...', '#mySpeech3')

  }

}
