import { style } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnChanges {

  @Input()
  activatePage: string | null = '';

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }


}
