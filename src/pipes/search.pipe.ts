import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Place } from '../app/places/place/place.model';

@Pipe({
  name: 'searchPipe',
  pure: false
})
@Injectable()
export class SearchPipe implements PipeTransform {
  transform(places: Place[], filter: string): Place[] {
    if (!places || !filter) {
      return places;
    }

    return places.filter(place =>
        place.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1

    );
  }
}
