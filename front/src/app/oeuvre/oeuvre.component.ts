import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MuseeService} from '../musee.service';

@Component({
  selector: 'app-oeuvre',
  templateUrl: './oeuvre.component.html',
  styleUrls: ['./oeuvre.component.css']
})
export class OeuvreComponent implements OnInit {
  oeuvre: string;
  listOeuvreByName: [] = [];



  constructor(private router:ActivatedRoute, private museeService: MuseeService) { }

  ngOnInit() {
  this.recupeOeuvre();
  console.log(this.recupeOeuvre());
  console.log(this.getOeuvreByRecherche(this.recupeOeuvre()));
  }

  recupeOeuvre() { this.oeuvre = this.router.snapshot.paramMap.get('rechercheNomOeuvre'); }

  getOeuvreByRecherche(rechercheNomOeuvre) {
    this.museeService.getOeuvreByRecherche(rechercheNomOeuvre).subscribe( (temp) => this.listOeuvreByName = temp);
  }



}
