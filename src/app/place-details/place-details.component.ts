import { ActivatedRoute, Router } from '@angular/router';
import { Place } from './../places/place/place.model';
import { PlaceService } from './../places/place.service';
import { Component, OnInit } from '@angular/core';

import {} from '@types/googlemaps';

import { MapsAPILoader } from '@agm/core';

import { Observable } from 'rxjs/Observable';

declare var google: any;

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

  // origin = { longitude: 4.333, latitude: -1.2222 }; // its a example aleatory position
  // destination = { longitude: 22.311, latitude: -0.123 }; // its a example aleatory position

  mapp: any;

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

    // this.findHospital();

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

//   public findHospital() {
//     const map = new google.maps.Map(this.mapp);

//     const nearbyPlaces = function(position: any): Observable<google.maps.places.PlaceResult[]> {

//       const service = new google.maps.places.PlacesService(map);

//       const nearbySearchCallback = service.nearbySearch.bind(service);

//       let nearbyAsObservable: any;

//       nearbyAsObservable = Observable.bindCallback(nearbySearchCallback, (results, status) => {
//           if (status !== google.maps.places.PlacesServiceStatus.OK) {
//             // throw { status, results };
//             console.log(results);
//           }
//           return results;
//         }
//       );
//       const placeRequest = {
//         location: this.userLocation,
//         radius: 500,
//         type: 'hospital'
//       };
//       return nearbyAsObservable(placeRequest) as Observable<google.maps.places.PlaceResult[]>;
//     };

//   nearbyPlaces(this.userLocation)
//   .subscribe((results: google.maps.places.PlaceResult[]) => console.log(results), err => console.error(err));
//   }
// }
}
