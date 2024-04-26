import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-fifth-page',
  templateUrl: './fifth-page.component.html',
  styleUrls: ['./fifth-page.component.css']
})
export class FifthPageComponent implements OnChanges {
  @Input()
  fipActive: boolean = false;

  constructor(private functions: FunctionsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.fipActive == true)
      this.functions.startTypingEffect(`Let's work together, contact me`, '#mySpeech5');
  }
}
