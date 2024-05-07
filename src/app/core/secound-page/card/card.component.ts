import { Component, Input, OnInit } from '@angular/core';
import { AboutItem } from 'src/app/model/aboutItem';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  aboutItem = new AboutItem;

  constructor() {
  }

  ngOnInit(): void {
    this.aboutItem.title = this.aboutItem.title.toUpperCase();
  }

}
