import { Pipe, PipeTransform } from '@angular/core';
import { Place } from '../app/places/place/place.model';

@Pipe({
  name: 'ratingPipe'
})
export class RatingPipe implements PipeTransform {
  transform(places: Place[], args?: any): any {
    if (!places || !args) {
      return places;
    }

    return places.filter(place => place.rating >= args);
  }
}
