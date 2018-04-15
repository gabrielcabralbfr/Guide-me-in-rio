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

  constructor(private router: Router) {
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
    this.isFavorited = this.placeAlreadySaved(this.place.place_id);
    // console.log(`O ${this.place.name} É FAVORITO?  ${this.isFavorited}`);
  }

  addOrRemovePlace(event: any, place: Place): void {
    this.changeIcon(event.path);
    console.log(event);

    if (this.placeAlreadySaved(place.place_id)) {
      this.removePlace(place.place_id);
    } else {
      this.savePlace(place);
    }
    console.log(place);
  }

  changeIcon(elements: any): void {
    let favIcon;

    favIcon = elements.filter(node => node.className === 'icon-container')[0].childNodes[1];

    favIcon.getAttribute('data-prefix') === 'fas' ? favIcon.setAttribute('data-prefix', 'far') : favIcon.setAttribute('data-prefix', 'fas');
  }

  savePlace(place: Place): void {
    if (this.LocalStorage.getItem('favoritePlaces') !== null) {
      this.favoritePlaces = JSON.parse(this.LocalStorage.getItem('favoritePlaces'));
    }
    this.favoritePlaces.push(place);
    this.LocalStorage.setItem('favoritePlaces', JSON.stringify(this.favoritePlaces));
  }

  placeAlreadySaved(placeId: string): boolean {
    // tslint:disable-next-line:curly
    if (this.LocalStorage.getItem('favoritePlaces') === null) return false;
    const places = JSON.parse(this.LocalStorage.getItem('favoritePlaces'));

    const savedPlace = places.filter(place => place.place_id === placeId);

    return savedPlace.length > 0 ? true : false;
  }

  removePlace(placeId: string): void {
    const newFavorites = this.favoritePlaces.filter(place => place.place_id !== placeId);

    this.LocalStorage.setItem('favoritePlaces', JSON.stringify(newFavorites));
  }
}
