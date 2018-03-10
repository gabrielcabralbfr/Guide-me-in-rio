import { Routes } from '@angular/router';

import { BannerComponent } from './banner/banner.component';
import { PlacesComponent } from './places/places.component';


export const ROUTES: Routes = [
    {path: '', component: BannerComponent},
    {path: 'place', component: PlacesComponent}
];
