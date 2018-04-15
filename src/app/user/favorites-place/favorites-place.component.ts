import { Component, OnInit } from '@angular/core';
import { Place } from '../../places/place/place.model';

import { from } from 'rxjs/observable/from';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-favorites-place',
  templateUrl: './favorites-place.component.html',
  styleUrls: ['./favorites-place.component.css']
})
export class FavoritesPlaceComponent implements OnInit {

  favorites: Observable<{}>;

  teste: Observable<{}>;

  constructor() { }

  ngOnInit() {
    const storage = window.localStorage;
    // this.favorites = <Place[]> from(JSON.parse(storage.getItem('favoritePlaces')));

    this.favorites = JSON.parse(storage.getItem('favoritePlaces'));

    // this.favorites.subscribe(val => this.favorites = val);
  }

}
