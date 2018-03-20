import { ActivatedRoute, Router } from '@angular/router';
import { Place } from './../places/place/place.model';
import { PlaceService } from './../places/place.service';
import { Component, OnInit, Input } from '@angular/core';

import { fromPromise } from 'rxjs/observable/fromPromise';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {

  place: Place;

  constructor(
    private placeService: PlaceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  async ngOnInit() {

    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

    const coords = {
      lat: -22.321,
      long: 33.53342
    };

    // navigator.geolocation.getCurrentPosition(position => {
      // coords.lat = position.coords.latitude;
      // coords.long = position.coords.longitude;

      const placeType = this.route.snapshot.paramMap.get('placeId');

      this.place = await this.placeService.getPlaceById(placeType, coords);
                        // .subscribe(place => this.place = place);

    // });

  }
}
