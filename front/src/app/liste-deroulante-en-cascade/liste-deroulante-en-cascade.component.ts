import { Component, OnInit } from '@angular/core';
import { Region } from '../models/region';
import { MuseeService } from '../musee.service';
import { Departement } from '../models/departement';
import { Ville } from '../models/ville';

@Component({
  selector: 'app-liste-deroulante-en-cascade',
  templateUrl: './liste-deroulante-en-cascade.component.html',
  styleUrls: ['./liste-deroulante-en-cascade.component.css']
})
export class ListeDeroulanteEnCascadeComponent implements OnInit {

  catPays = "--Pays--";
  catRegion = "--Regions--";
  catDepartement = "--Departements--";
  catVille = "--Villes--"
  listRegions: Region[];
  listDepartements: Departement[];
  listVilles: Ville[];

  constructor(private museeService: MuseeService) { }

  // Au chargement de la page
  ngOnInit() {
    this.getAllRegions();
    this.getAllDepartements();
  }

  // Fonctions associées au Back

    getAllRegions() {
      this.museeService.getRegionList().subscribe((regions: Region[]) => {
        this.listRegions = regions;
      })
    }

    getAllDepartements() {
      this.museeService.getDepartementList().subscribe((departements: Departement[]) => {
        this.listDepartements = departements;
      })
    }

    getAllVilles() {
      this.museeService.getVilleList().subscribe((villes: Ville[]) => {
        this.listVilles = villes;
      })
    }

    getAllDepartementsByRegion(codeRegion : String) {    
      this.museeService.getDepartementsByRegion(codeRegion).subscribe((departements: Departement[]) => {
        this.listDepartements = departements;
      })
    }
    
    getAllVillesByDepartement(codeDepartement : String) {    
      this.museeService.getVillesByDepartement(codeDepartement).subscribe((villes: Ville[]) => {
        this.listVilles = villes;
      })
    }
  
  // Fonctions des évènements associés

  handleSelectRegion(evt) {
    let codeRegion = evt.target.value;
    this.getAllDepartementsByRegion(codeRegion);
  }

  handleSelectDepartement(evt) {
    let codeDepartement = evt.target.value;
    this.getAllVillesByDepartement(codeDepartement);
  }

}
