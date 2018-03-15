import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';

import { CardService } from './card/card.service';
import { PlaceService } from './places/place.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { PlaceComponent } from './places/place/place.component';
import { PlacesComponent } from './places/places.component';

import { SearchPipe } from '../pipes/search.pipe';
import { ActivePipe } from '../pipes/active.pipe';
import { LoginComponent } from './login/login.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';

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
    HomeComponent,
    LoginComponent,
    PlaceDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [
    CardService,
    PlaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
