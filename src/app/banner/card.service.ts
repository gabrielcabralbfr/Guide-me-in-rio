import { API } from './../app.api';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { Observable } from 'rxjs/Observable';
import { Card } from './card.model';
import { ErrorHandler } from '../app.error-handler';
import { Place } from '../places/place/place.model';

@Injectable()
export class CardService {
    cardList: Card[];

    constructor(private http: Http) { }

    cards(): Observable<Card[]> {
        return this.http.get(`${API}/sample`)
                        .map(response => response.json())
                        .catch(ErrorHandler.handleError);
    }
}
