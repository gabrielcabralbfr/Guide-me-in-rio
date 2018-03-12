import { Http } from '@angular/http';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Place } from './place/place.model';
import { API } from '../app.api';

import { ErrorHandler } from '../app.error-handler';


const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
};
const coords = {
  lat: 0,
  long: 0
};



@Injectable()
export class PlaceService {

  places: Place[];

  constructor(private http: Http) {
    const userLocation = navigator.geolocation.getCurrentPosition(position => {
      coords.lat = position.coords.latitude;
      coords.long = position.coords.longitude;
    });
  }

  getPlaces(placeType: string): Observable<Place[]> {
    return this.http
      // .get(`${API}&location=${coords.lat},${coords.long}&radius=500&type=bar&key=AIzaSyDo3OA_oX7m9hGeEBScvsF1uP5jIPf4ARI`)
      .get(`${API}${placeType}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

}
