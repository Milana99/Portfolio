import { Component, Input, OnInit } from '@angular/core';
import { ItemOfAboutItem } from 'src/app/model/ItemOfAboutItem';
import { FunctionsService } from 'src/app/services/functions.service';

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

  constructor(private functions: FunctionsService) {

  }

  ngOnInit(): void {
    this.cardItem.name = this.functions.capitalizeFirstLetter(this.cardItem.name)
  }





}
