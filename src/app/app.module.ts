import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';

import { CardService } from './banner/card.service';
import { PlaceService } from './places/place.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { PlaceComponent } from './places/place/place.component';
import { PlacesComponent } from './places/places.component';

import { SearchPipe } from './pipes/search.pipe';
import { ActivePipe } from './pipes/active.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    CardComponent,
    PlaceComponent,
    PlacesComponent,
    SearchPipe,
    ActivePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
