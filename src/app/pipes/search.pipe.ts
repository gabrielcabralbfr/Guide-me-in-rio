import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Place } from '../places/place/place.model';

@Pipe({
  name: 'searchPipe',
  pure: false
})
@Injectable()
export class SearchPipe implements PipeTransform {
  transform(places: any[], filter: string): Place[] {
    if (!places || !filter) {
      return places;
    }

    return places.filter(place =>
        place.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1

    );
  }
}
