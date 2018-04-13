import { FavoritesPlaceComponent } from './user/favorites-place/favorites-place.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NotfoundComponent } from './notfound/notfound.component';
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
    {
        path: 'favorites',
        component: FavoritesPlaceComponent,
        canActivate: []
    },
    {path: 'login', component: LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'place/:placeType/:placeId', component: PlaceDetailsComponent},
    {path: '404', component: NotfoundComponent},
    {path: '**', redirectTo: '404'},

];
