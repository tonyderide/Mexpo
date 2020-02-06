import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css']
})
export class LocalisationComponent implements OnInit {

  codeRegionCarte : String = '';

  constructor() { }

  ngOnInit() {
  }

  onCodeRegionCarte(st : String) {
    this.codeRegionCarte = st;
  }

}
