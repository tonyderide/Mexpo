import { Injectable } from '@angular/core';
import { Musee } from './models/musee';
import { OeuvreArtiste } from './models/oeuvreartiste';

@Injectable()
export class Globals {

    recherche: string = "";
    listeMuseeRecherche : Musee[];
    listeOeuvreRecherche : OeuvreArtiste[];
    rechercheNomOeuvre: string;
}
