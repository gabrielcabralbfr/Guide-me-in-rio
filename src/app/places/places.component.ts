import { Component, OnInit } from '@angular/core';

import { Place } from './place/place.model';

import { PlaceService } from './place.service';

import { SearchPipe } from './../pipes/search.pipe';
import { ActivePipe } from './../pipes/active.pipe';


@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  places: Place[];

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.placeService.getPlaces('teste')
                     .subscribe(response => this.places = response);
  }

}
