import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carte-region',
  templateUrl: './carte-region.component.html',
  styleUrls: ['./carte-region.component.css']
})
export class CarteRegionComponent implements OnInit {

  @Output() codeRegionCarte = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  recupererCodeRegion(valeur : string) {
    this.codeRegionCarte.emit(valeur);
  }

}
