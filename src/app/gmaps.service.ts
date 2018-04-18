import { Injectable } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { Observable } from 'rxjs/Observable';
declare var google;

@Injectable()
export class GmapsService {
  private result: Observable<any[]>;

  constructor(private mapsAPILoader: MapsAPILoader) {}

  nearbySearch(placeType: string, radius: number, location: any): Observable<any[]> {
      const map = document.getElementById('map');

      this.mapsAPILoader.load().then(() => {
        const service = new google.maps.places.PlacesService(map);

        const placeRequest = {
          location: location,
          radius: radius,
          types: [placeType]
        };

        service.nearbySearch(placeRequest, (results, status) => {
          this.result = results;
          // console.log(results[1].photos[0].getUrl({maxWidth: '200px', maxHeight: '200px'}));
          console.log(results);
        });
      });
      // console.log(this.result);
      return this.result;
  }
}
