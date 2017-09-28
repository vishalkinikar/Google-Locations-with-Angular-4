import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { GoogleMapsSearchComponent } from './google-maps-search/google-maps-search.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

import { DataService } from './data.service';
import { ComService } from './com.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    PlaceListComponent,
    GoogleMapsSearchComponent,
    GoogleMapsComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDwTfOml49Q6fjxMwLGYt7qZDL48Keh9oI',
      libraries: ["places"]
    }),
    HttpModule
  ],
  providers: [DataService, ComService],
  bootstrap: [AppComponent]
})
export class AppModule { }
