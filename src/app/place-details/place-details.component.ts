import { ActivatedRoute, Router } from '@angular/router';
import { Place } from './../places/place/place.model';
import { PlaceService } from './../places/place.service';
import { Component, OnInit } from '@angular/core';

import {} from '@types/googlemaps';

import { MapsAPILoader } from '@agm/core';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
  place: Place;

  public userLocation = {
    lat: 0,
    lng: 0
  };

  origin = { longitude: 4.333, latitude: -1.2222 }; // its a example aleatory position
  destination = { longitude: 22.311, latitude: -0.123 }; // its a example aleatory position

  constructor(
    private placeService: PlaceService,
    private route: ActivatedRoute,
    private router: Router,
    private mapsAPILoader: MapsAPILoader
  ) {}

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.getUserLocation();

    const placeType = this.route.snapshot.paramMap.get('placeType');
    const placeId = this.route.snapshot.paramMap.get('placeId');

    this.placeService
      .getPlaceById(placeType, placeId)
      .subscribe(place => (this.place = place));
  }

  getUserLocation(): any {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.userLocation.lat = position.coords.latitude;
        this.userLocation.lng = position.coords.longitude;

        console.log(position);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
}
