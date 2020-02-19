import { Component, OnInit, ViewChild } from '@angular/core';
import { Musee } from '../models/musee';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MuseeService } from '../musee.service';
import { Globals } from '../global';
import { Router } from '@angular/router';
import { OeuvreArtiste } from '../models/oeuvreartiste';
import { OeuvreMusee } from '../models/oeuvremusee';

@Component({
  selector: 'app-tableau-oeuvre',
  templateUrl: './tableau-oeuvre.component.html',
  styleUrls: ['./tableau-oeuvre.component.css']
})
export class TableauOeuvreComponent implements OnInit {

  displayedColumns: string[] = ['Oeuvre', 'Ville', 'N°', 'Musée', 'Ville', 'Reservation'];
  musee: Musee;
  listOeuvres: OeuvreArtiste[];
  listOeuvresMusee : OeuvreMusee[];
  dataSource: MatTableDataSource<OeuvreMusee>;
  recherche: string;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private museeService: MuseeService, private globals: Globals, private route: Router) {
    this.recherche = globals.recherche;
    this.listOeuvres = globals.listeOeuvreRecherche;
  }

  ngOnInit() {
    if (this.recherche !== "") {
      
      this.recupererMusee(this.listOeuvres);
      // this.setMusees(this.listOeuvresMusee);
      
    }

    this.globals.recherche="";
  }

  recupererMusee(lstOeuvres : OeuvreArtiste[]) {
    lstOeuvres.forEach(oeuvreArtiste => {
      
      this.getMuseeById(oeuvreArtiste.idMusee);

      console.log(this.musee);
    
      let oeuvremusee = new OeuvreMusee(oeuvreArtiste.oeuvre, oeuvreArtiste.artiste, oeuvreArtiste.idMusee, this.musee.nomMusee, this.musee.ville, this.musee.siteWeb);

      // this.listOeuvresMusee.push(oeuvremusee);

    });
  }

  getMuseeById(idMusee: String) {
    this.museeService.getMuseeById(idMusee).subscribe((musees: Musee) => {
      this.musee = musees;
    })
  }

  setMusees(lstOeuvresMusee: OeuvreMusee[]) {
    lstOeuvresMusee.forEach(oeuvremusee => {
      if (oeuvremusee.siteWeb && !oeuvremusee.siteWeb.startsWith("http")) {
        oeuvremusee.siteWeb = 'http://' + oeuvremusee.siteWeb;
      }
    });
    this.listOeuvresMusee = lstOeuvresMusee;
    this.setDataSourceTab();
  }
  
  setDataSourceTab() {
    this.dataSource = new MatTableDataSource<OeuvreMusee>(this.listOeuvresMusee);
    this.dataSource.paginator = this.paginator;
  }

}
