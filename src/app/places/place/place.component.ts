import { PlaceService } from './../place.service';
import { Place } from './place.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationKeyframesSequenceMetadata } from '@angular/core/src/animation/dsl';
import { storage } from 'firebase/app';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  @Input() place: Place;

  constructor(private router: Router,
              private placeService: PlaceService) {
    this.favoritePlaces = JSON.parse(localStorage.getItem('favoritePlaces')) || [];
  }

  public LocalStorage: any = window.localStorage;

  public favoritePlaces: Place[] = new Array<Place>();

  public isFavorited: boolean;


  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

    this.favoritePlaces = JSON.parse(this.LocalStorage.getItem('favoritePlaces'));
    this.isFavorited = this.placeService.placeAlreadySaved(this.place.place_id);
  }

  addOrRemovePlace(event: any, place: Place): void {
    this.placeService.changeIcon(event.path);

    if (this.placeService.placeAlreadySaved(place.place_id)) {
      this.placeService.removePlace(place.place_id);
    } else {
      this.placeService.savePlace(place);
    }
  }
}
