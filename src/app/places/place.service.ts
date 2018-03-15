import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Place } from './place/place.model';

import { ErrorHandler } from '../app.error-handler';

import * as gmaps from '../../assets/google-maps-api.js';

@Injectable()
export class PlaceService {

  places: Place[];

  constructor() {

  }

  getPlaces(placeType, coords): Array<Place> {
    return gmaps.GetPlacesFrom(placeType, coords);
  }

  getPlaceById(id, coords): any {
    return gmaps.GetDetailsById(id, coords);
  }

}
