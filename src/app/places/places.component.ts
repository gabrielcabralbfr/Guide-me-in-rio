import { GmapsService } from './../gmaps.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Place } from './place/place.model';

import { PlaceService } from './place.service';

import { SearchPipe } from '../../pipes/search.pipe';
import { ActivePipe } from '../../pipes/active.pipe';
import { RatingPipe } from '../../pipes/rating.pipe';
import { AddressPipe } from '../../pipes/address.pipe';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  teste: any[];
  places: Place[];

  get nearbyPlaces(): Subscription {
    return this.gmaps.nearbySearch('bar', 100, {lat: -22.9004503, lng: -43.17979280000001}).subscribe((response) => this.teste = response);
  }

  constructor(
    private placeService: PlaceService,
    private route: ActivatedRoute,
    private router: Router,
    private gmaps: GmapsService
  ) {}

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

    const placeType = this.route.snapshot.paramMap.get('placeType');

    // this.placeService.getPlaces(placeType).subscribe(response => {
    //   this.places = response;
    // });

    console.log(this.teste);
  }
}
