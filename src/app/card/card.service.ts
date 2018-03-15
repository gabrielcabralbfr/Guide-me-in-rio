import { API } from './../app.api';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { Observable } from 'rxjs/Observable';
import { Card } from './card.model';
import { ErrorHandler } from '../app.error-handler';
import { Place } from '../places/place/place.model';

@Injectable()
export class CardService {
    cardList: Card[];

    constructor() { }


}
