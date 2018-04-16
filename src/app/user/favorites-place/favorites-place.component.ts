import { Component, OnInit } from '@angular/core';
import { Place } from '../../places/place/place.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-favorites-place',
  templateUrl: './favorites-place.component.html',
  styleUrls: ['./favorites-place.component.css']
})
export class FavoritesPlaceComponent implements OnInit {

  get favorites(): Observable<Place[]> {
    return this.getPlaces();
  }

  constructor() { }
  public storage = window.localStorage;

  ngOnInit() {
  }

  getPlaces(): Observable<Place[]> {
    const places: Place[] = JSON.parse(this.storage.getItem('favoritePlaces'));
    if (places != null) {
      return Observable.of(places);
    }
  }

}
