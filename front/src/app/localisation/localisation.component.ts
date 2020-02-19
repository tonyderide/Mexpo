import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css']
})
export class LocalisationComponent implements OnInit {

  codeRegionCarte : string = '-1';
  codeRegionListeDeroulante : string = '-1';
  codeDepartementListeDeroulante : string = '-1';
  codeVilleListeDeroulante : string = '-1';
  codeMusee: string;
  
  constructor() { }

  ngOnInit() {
  }

  onCodeRegionCarte(st : string) {
    this.codeRegionCarte = st;
  }

  onCodeRegionListeDeroulante(st : string) {
    this.codeRegionListeDeroulante = st;
  }

  onCodeDepartementListeDeroulante(st : string) {
    this.codeDepartementListeDeroulante = st;
  }

  onCodeVilleListeDeroulante(st: string) {
    this.codeVilleListeDeroulante = st;
  }

  onCodeMusee(st : string) {
    this.codeMusee = st;
  }
}
