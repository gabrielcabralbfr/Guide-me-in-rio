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

  constructor(private router: Router) {}

  public storage = window.localStorage;

  public favoritePlaces = JSON.parse(this.storage.getItem('favoritePlaces'));

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  savePlace(event: any): void {
    this.changeIcon(event.target);
    console.log(event);
  }

  changeIcon(element: HTMLElement) {
    if (element.classList.contains('red-text')) {
      element.innerHTML = 'favorite_border';
    } else {
      element.innerHTML = 'favorite';
    }

    element.classList.toggle('red-text');
  }

  addFavorite(element: HTMLElement) {
    this.favoritePlaces.push(element);
    this.storage.setItem('favoritePlaces', JSON.stringify(this.favoritePlaces));
  }
}
