import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card.model';
import { CardService } from '../card/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: Card[];

  constructor(private cardService: CardService) {}

  ngOnInit() {
  }
}
