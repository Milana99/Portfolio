import { AfterViewInit, Component, ElementRef, Input, OnChanges, Renderer2, RendererFactory2, SimpleChanges, ViewChild } from '@angular/core';
import { PLanguage } from 'src/app/model/pLanguage';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent implements OnChanges {
  @Input()
  rangeElement = new PLanguage;
  @Input()
  tpActive: boolean = false;

  @ViewChild('rangeInput') rangeInput: ElementRef | undefined;
  selectedValue: number = 0;
  maxValue: number = 100;

  constructor(private functions: FunctionsService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tpActive == true) {
      this.functions.animateRange(this.selectedValue, this.rangeElement, this.rangeInput);
    }


  }



}
