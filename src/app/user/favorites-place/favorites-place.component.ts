import { Component, OnInit } from '@angular/core';
import { Place } from '../../places/place/place.model';

@Component({
  selector: 'app-favorites-place',
  templateUrl: './favorites-place.component.html',
  styleUrls: ['./favorites-place.component.css']
})
export class FavoritesPlaceComponent implements OnInit {

  favorites: Place[];

  constructor() { }

  ngOnInit() {
    const storage = window.localStorage;
    this.favorites = JSON.parse(storage.getItem('favorites'));

  }

}
