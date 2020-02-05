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
    //this.getAllVilles();
  }

  // Récupérer le JSON du back grâce à la fonction getRegionList() du Service puis l'inscrire dans la listRegions
  getAllRegions() {
    this.museeService.getRegionList().subscribe((regions: Region[]) => {
      this.listRegions = regions;
    })
  }

  // Récupérer le JSON du back grâce à la fonction getDepartementList() du Service puis l'inscrire dans la listDepartements
  getAllDepartements() {
    this.museeService.getDepartementList().subscribe((departements: Departement[]) => {
      this.listDepartements = departements;
    })
  }

  // Récupérer le JSON du back grâce à la fonction getVilleList() du Service puis l'inscrire dans la listVilles
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

}
