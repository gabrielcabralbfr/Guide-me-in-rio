import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { GoogleMapsAPIWrapper } from '@agm/core';
import { AgmCoreModule, MapsAPILoader} from '@agm/core';

import { RouterModule, Router } from '@angular/router';
import { ROUTES } from './app.routes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardService } from './card/card.service';
import { PlaceService } from './places/place.service';
import { UserService } from './user/user.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { PlaceComponent } from './places/place/place.component';
import { PlacesComponent } from './places/places.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';

import { SearchPipe } from '../pipes/search.pipe';
import { ActivePipe } from '../pipes/active.pipe';
import { RatingPipe } from '../pipes/rating.pipe';
import { AddressPipe } from '../pipes/address.pipe';



import { DirectionsMapDirective } from './place-details/place-directions.directive';

import { environment } from '../environments/environment';
import {
  AuthMethods,
  AuthProvider,
  AuthProviderWithCustomConfig,
  CredentialHelper,
  FirebaseUIAuthConfig,
  FirebaseUIModule
} from 'firebaseui-angular';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ToastrModule } from 'ngx-toastr';
import { FavoritesPlaceComponent } from './user/favorites-place/favorites-place.component';

const facebookCustomConfig: AuthProviderWithCustomConfig = {
  provider: AuthProvider.Facebook,
  customConfig: {
    scopes: [
      'public_profile',
      'email'
    ]
  }
};

const firebaseUiAuthConfig: FirebaseUIAuthConfig = {
  providers: [
    AuthProvider.Google,
    facebookCustomConfig,
    AuthProvider.Twitter,
    AuthProvider.Github
  ],
  method: AuthMethods.Popup,
  credentialHelper: CredentialHelper.AccountChooser
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    PlaceComponent,
    PlacesComponent,
    SearchPipe,
    ActivePipe,
    RatingPipe,
    AddressPipe,
    HomeComponent,
    LoginComponent,
    PlaceDetailsComponent,
    NotfoundComponent,
    CadastroComponent,
    DirectionsMapDirective,
    UserComponent,
    FavoritesPlaceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDo3OA_oX7m9hGeEBScvsF1uP5jIPf4ARI',
     libraries: ['places']
   }),
   ReactiveFormsModule,
   ToastrModule.forRoot(),
   BrowserAnimationsModule,
   AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFireAuthModule,
   FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [
    CardService,
    PlaceService,
    AgmCoreModule,
    GoogleMapsAPIWrapper,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
