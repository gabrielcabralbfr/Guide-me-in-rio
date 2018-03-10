import { Place } from './place.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  @Input() place: Place;

  constructor() { }

  ngOnInit() {
  }

}
