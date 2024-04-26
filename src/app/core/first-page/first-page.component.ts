import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit, OnChanges {

  @Input()
  fpActive: boolean = false;

  constructor(private functions: FunctionsService) { }
  ngOnInit(): void {
    this.functions.startTypingEffect('Hi, I am', '#mySpeech1')
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}
