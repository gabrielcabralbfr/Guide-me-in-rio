import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Place } from './place/place.model';
import { API } from '../app.api';
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class PlaceService {

  places: Place[];

  constructor(private http: Http) {}

  getPlaces(placeType: string): Observable<Place[]> {
    return this.http
      .get(`${API}/${placeType}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }
}
