import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';
import { CardService } from './card.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  cards: Card[];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService
    .cards()
    .subscribe(response => this.cards = response);
  }

}
