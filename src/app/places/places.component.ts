import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Place } from './place/place.model';

import { PlaceService } from './place.service';

import { SearchPipe } from '../../pipes/search.pipe';
import { ActivePipe } from '../../pipes/active.pipe';


@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  places: Place[];

  constructor(private placeService: PlaceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const placeType = this.route.snapshot.paramMap.get('placeType');

    this.placeService.getPlaces(placeType)
                     .subscribe(response => this.places = response);

    this.router.routeReuseStrategy.shouldReuseRoute = (() =>  {
      return false;
    });
  }
}
