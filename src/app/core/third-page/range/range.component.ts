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

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tpActive == true) {
      this.animateRange();
    }
  }

  animateRange() {
    this.renderer.setProperty(this.rangeInput?.nativeElement, 'value', 0);

    const targetValue = this.rangeElement.percentage;

    const steps = 100;
    const duration = 2000;
    const stepValue = targetValue / steps;
    const interval = duration / steps;

    let currentValue = 0;
    const intervalId = setInterval(() => {
      currentValue += stepValue;
      this.selectedValue = parseInt(currentValue.toFixed(1));
      this.renderer.setProperty(this.rangeInput?.nativeElement, 'value', currentValue);

      if (currentValue >= targetValue) {
        clearInterval(intervalId);
      }
    }, interval);
  }



}
