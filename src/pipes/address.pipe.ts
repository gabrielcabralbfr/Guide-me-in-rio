import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Place } from '../app/places/place/place.model';

@Pipe({
  name: 'addressPipe',
  pure: false
})
@Injectable()
export class AddressPipe implements PipeTransform {
  transform(places: Place[], filter: string): Place[] {
    if (!places || !filter) {
      return places;
    }

    return places.filter(place =>
        place.vicinity.toLowerCase().indexOf(filter.toLowerCase()) !== -1

    );
  }
}
