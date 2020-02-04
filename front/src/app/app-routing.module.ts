import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchMuseeComponent} from "./accueil/search-musee.component";
import {ArtistesComponent} from "./artiste/artistes.component";
import {LocalisationComponent} from "./localisation/localisation.component";
import {MuseeComponent} from "./musee/musee.component";
import {SeConnecterComponent} from "./se-connecter/se-connecter.component";
import {ThemeComponent} from "./theme/theme.component";
import {OeuvreComponent} from "./oeuvre/oeuvre.component";
import {ExpositionComponent} from "./exposition/exposition.component";

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: SearchMuseeComponent},
  { path: 'artistes', component: ArtistesComponent },
  { path: 'localisation', component: LocalisationComponent },
  { path: 'musees', component: MuseeComponent },
  { path: 'seconnecter', component: SeConnecterComponent },
  { path: 'themes', component: ThemeComponent},
  { path: 'oeuvres', component: OeuvreComponent},
  { path: 'expositions', component: ExpositionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

