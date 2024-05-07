import { Component, Input, OnInit } from '@angular/core';
import { ItemOfAboutItem } from 'src/app/model/ItemOfAboutItem';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input()
  cardItem = new ItemOfAboutItem;
  @Input()
  cardItemParentId = ""

  constructor() {

  }

  ngOnInit(): void {
    this.cardItem.name = this.capitalizeFirstLetter(this.cardItem.name)
  }

  capitalizeFirstLetter(word: string) {
    return word[0].toUpperCase() + word.slice(1);
  }



}
