import { ErrorHandler } from './../app.error-handler';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Place } from './place/place.model';

import * as gmaps from '../../assets/google-maps-api.js';

@Injectable()
export class PlaceService {


  constructor() {

  }

  getPlaces(placeType, coords): Array<Place> {
    return gmaps.GetPlacesFrom(placeType, coords);

  }

  async getPlaceById(id, coords): Promise<Place> {
    const response = await gmaps.GetDetailsById(id, coords).toPromise();

    return response;
  }

}
