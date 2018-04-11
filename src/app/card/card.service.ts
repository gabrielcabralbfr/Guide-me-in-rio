import { API } from './../app.api';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { Observable } from 'rxjs/Observable';
import { Card } from './card.model';
import { ErrorHandler } from '../app.error-handler';
import { Place } from '../places/place/place.model';
import { Http } from '@angular/http';

@Injectable()
export class CardService {
    cardList: Card[];

    constructor(private http: Http) { }


    getCards(): Observable<Card[]> {
        return this.http.get('http://localhost:3000/sample').map(response => response.json());
    }
}
