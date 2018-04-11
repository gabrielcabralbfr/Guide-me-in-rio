import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AgmCoreModule, MapsAPILoader} from '@agm/core';

import { RouterModule, Router } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { SearchPipe } from '../pipes/search.pipe';
import { ActivePipe } from '../pipes/active.pipe';

import { ToastrModule } from 'ngx-toastr';


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
    PlaceDetailsComponent,
    NotfoundComponent,
    CadastroComponent
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
   BrowserAnimationsModule
  ],
  providers: [
    CardService,
    PlaceService,
    AgmCoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
