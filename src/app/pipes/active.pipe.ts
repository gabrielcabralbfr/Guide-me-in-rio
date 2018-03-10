import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Place } from '../places/place/place.model';

@Pipe({
  name: 'activePipe',
  pure: false
})
@Injectable()
export class ActivePipe implements PipeTransform {
  transform(places: any[], filter: any): Place[] {
    if (!places || !filter) {
      return places;
    }

    filter = filter === 'true' ? true : false;

   return places.filter(place => place.opening_hours.open_now === filter);

  }
}
