import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchMuseeComponent} from "./accueil/search-musee.component";
import {ArtistesComponent} from "./artiste/artistes.component";
import {LocalisationComponent} from "./localisation/localisation.component";
import {MuseeComponent} from "./musee/musee.component";
import {SeConnecterComponent} from "./se-connecter/se-connecter.component";
import {ThemeComponent} from "./theme/theme.component";

const routes: Routes = [
  { path: 'acceuil', component: SearchMuseeComponent},
  { path: 'artiste', component: ArtistesComponent },
  { path: 'localisation', component: LocalisationComponent },
  { path: 'musee', component: MuseeComponent },
  { path: 'seConnecter', component: SeConnecterComponent },
  { path: 'themes', component: ThemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

