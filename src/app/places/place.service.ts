import { ErrorHandler } from './../app.error-handler';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Place } from './place/place.model';

import { Http } from '@angular/http';


@Injectable()
export class PlaceService {

  public LocalStorage: any = window.localStorage;
  public favoritePlaces: Place[] = new Array<Place>();

  constructor(private http: Http) { }

  getPlaces(placeType: string): Observable<Place[]> {
    return this.http.get('http://localhost:3000/' + placeType)
                    .map(response => response.json());

  }

  getPlaceById(placeType: string, id: string): Observable<Place> {
    return this.http.get('http://localhost:3000/' + placeType + '/' + id)
                    .map(response => response.json());

  }

  changeIcon(elements: any): void {
    let favIcon;

    favIcon = elements.filter(node => node.className === 'icon-container')[0].childNodes[1];

    favIcon.getAttribute('data-prefix') === 'fas' ? favIcon.setAttribute('data-prefix', 'far') : favIcon.setAttribute('data-prefix', 'fas');
  }

  savePlace(place: Place): void {
    if (this.LocalStorage.getItem('favoritePlaces') !== null) {
      this.favoritePlaces = JSON.parse(this.LocalStorage.getItem('favoritePlaces'));
    }
    this.favoritePlaces.push(place);
    this.LocalStorage.setItem('favoritePlaces', JSON.stringify(this.favoritePlaces));
  }

  placeAlreadySaved(placeId: string): boolean {
    // tslint:disable-next-line:curly
    if (this.LocalStorage.getItem('favoritePlaces') === null) return false;
    const places = JSON.parse(this.LocalStorage.getItem('favoritePlaces'));

    const savedPlace = places.filter(place => place.place_id === placeId);

    return savedPlace.length > 0 ? true : false;
  }

  removePlace(placeId: string): void {
    const newFavorites = this.favoritePlaces.filter(place => place.place_id !== placeId);

    this.LocalStorage.setItem('favoritePlaces', JSON.stringify(newFavorites));
  }

}
