import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchMuseeComponent} from "./searchbar/search-musee.component";
import {LocalisationComponent} from "./localisation/localisation.component";
import {MuseeComponent} from "./musee/musee.component";
import {SeConnecterComponent} from "./se-connecter/se-connecter.component";
import {ThemeComponent} from "./theme/theme.component";
import {OeuvreComponent} from "./oeuvre/oeuvre.component";
import {ExpositionComponent} from "./exposition/exposition.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {UpdateProfilComponent} from "./update-profil/update-profil.component";


const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent},
  { path: 'localisation', component: LocalisationComponent },
  { path: 'musees', component: MuseeComponent },
  { path: 'musees/:idMusee', component: MuseeComponent },
  { path: 'seconnecter', component: SeConnecterComponent },
  { path: 'themes', component: ThemeComponent},
  { path: 'themes/:idTheme', component: ThemeComponent},
  { path: 'oeuvres', component: OeuvreComponent},
  { path: 'expositions', component: ExpositionComponent},
  { path: 'update' , component: UpdateProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

