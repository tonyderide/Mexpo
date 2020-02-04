import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchMuseeComponent} from './accueil/search-musee.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MuseeComponent } from './musee/musee.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { ThemeComponent } from './theme/theme.component';
import { ArtistesComponent } from './artiste/artistes.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { OeuvreComponent } from './oeuvre/oeuvre.component';
import { ExpositionComponent } from './exposition/exposition.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchMuseeComponent,
    FooterComponent,
    MuseeComponent,
    LocalisationComponent,
    ThemeComponent,
    ArtistesComponent,
    SeConnecterComponent,
    OeuvreComponent,
    ExpositionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
