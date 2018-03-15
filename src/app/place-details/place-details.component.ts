import { ActivatedRoute } from '@angular/router';
import { Place } from './../places/place/place.model';
import { PlaceService } from './../places/place.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {

  @Input() place: Place;
  constructor(
    private placeService: PlaceService,
    private route: ActivatedRoute
  ) {}


  ngOnInit() {
    const coords = {
      lat: 0,
      long: 0
    };

    navigator.geolocation.getCurrentPosition(position => {
      coords.lat = position.coords.latitude;
      coords.long = position.coords.longitude;

      const placeType = this.route.snapshot.paramMap.get('placeId');

      this.place = this.placeService.getPlaceById(placeType, coords);

    });
  }
}
