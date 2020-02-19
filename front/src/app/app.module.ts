import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchMuseeComponent} from './searchbar/search-musee.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { MuseeComponent } from './musee/musee.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { ThemeComponent } from './theme/theme.component';
import { ArtistesComponent } from './artiste/artistes.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { OeuvreComponent } from './oeuvre/oeuvre.component';
import { ExpositionComponent } from './exposition/exposition.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CarteRegionComponent } from './carte-region/carte-region.component';
import { ListeDeroulanteEnCascadeComponent } from './liste-deroulante-en-cascade/liste-deroulante-en-cascade.component';
import { TableauResultatMuseeComponent } from './tableau-resultat-musee/tableau-resultat-musee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ImageMuseesComponent } from './image-musees/image-musees.component';
import { ImageThemesComponent } from './image-themes/image-themes.component';
import {
  MatProgressSpinnerModule,
  MatSortModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";
import {MatInputModule} from '@angular/material';
import { MatAutocompleteModule } from "@angular/material/";
import { FicheMuseeComponent } from './fiche-musee/fiche-musee.component';

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
    AccueilComponent,
    CarteRegionComponent,
    ListeDeroulanteEnCascadeComponent,
    TableauResultatMuseeComponent,
    ImageMuseesComponent,
    ImageThemesComponent,
    FicheMuseeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
