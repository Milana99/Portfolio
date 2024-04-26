import { Component, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';


@Component({
  selector: 'app-secound-page',
  templateUrl: './secound-page.component.html',
  styleUrls: ['./secound-page.component.css']
})
export class SecoundPageComponent implements OnChanges {

  @Input()
  spActive: boolean = false;

  constructor(private functions: FunctionsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.spActive == true)
      this.functions.startTypingEffect('Something about my...', '#mySpeech2')
  }

}
