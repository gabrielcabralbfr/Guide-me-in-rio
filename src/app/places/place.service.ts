import { ErrorHandler } from './../app.error-handler';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Place } from './place/place.model';

import { Http } from '@angular/http';


@Injectable()
export class PlaceService {


  constructor(private http: Http) {

  }

  getPlaces(placeType): Observable<Place[]> {
    return this.http.get('http://localhost:3000/' + placeType)
                    .map(response => response.json());

  }

  getPlaceById(placeType, id): Observable<Place> {
    return this.http.get('http://localhost:3000/' + placeType + '/' + id)
                    .map(response => response.json());

  }

}
