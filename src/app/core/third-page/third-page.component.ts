import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnChanges {

  @Input()
  tpActive: boolean = false;

  constructor(private functions: FunctionsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tpActive == true)
      this.functions.startTypingEffect('...and something about my...', '#mySpeech3')

  }

}
