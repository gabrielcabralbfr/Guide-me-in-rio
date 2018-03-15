import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlacesComponent } from './places/places.component';
import { LoginComponent } from './login/login.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {
        path: 'place/:placeType',
        component: PlacesComponent,
        data: { title: '/:placeType' }
    },
    {path: 'login', component: LoginComponent},
    {path: 'place/:placeType/:placeId', component: PlaceDetailsComponent},
];
