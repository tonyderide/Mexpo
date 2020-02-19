import { Component, OnInit, ViewChild, Input, SimpleChange, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Musee } from '../models/musee';
import { MuseeService } from '../musee.service';
import { Globals } from '../global';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tableau-resultat-musee',
  templateUrl: './tableau-resultat-musee.component.html',
  styleUrls: ['./tableau-resultat-musee.component.css']
})
export class TableauResultatMuseeComponent implements OnInit {

  displayedColumns: string[] = ['N°', 'Musée', 'Ville', 'Reservation'];
  listMusees: Musee[];
  dataSource: MatTableDataSource<Musee>;
  recherche: string;
  
  liste1: [] = [];

  musee: Musee;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input() codeRegionListeDeroulante: string;
  @Input() codeDepartementListeDeroulante: string;
  @Input() codeVilleListeDeroulante: string;
  @Input() codeRegionCarte: string;
  @Input() codeTheme: number;

  @Output() codeMusee = new EventEmitter<string>();

  constructor(private museeService: MuseeService, private globals: Globals, private route: Router, private router: ActivatedRoute) { 
    this.recherche = globals.recherche;
    this.listMusees = globals.listeMuseeRecherche;

  }

  ngOnInit() {    
    this.recupererIdURL();
    
    if (this.codeTheme && this.codeTheme !== -1) {
      this.getMuseesByThemes(this.codeTheme);
    } else {
      this.getAllMusees();
    }

    this.codeTheme = -1;
  }

  /**
   * ATTENTION
   */
  // ngDoCheck() {
  //   // CHECK CHANGEMENT VALEUR RECHERCHE
  //   console.log(this.globals.listeMuseeRecherche.length === this.listMusees.length);
    
  // }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    
    for (let propName in changes) {

      if (propName === 'codeRegionCarte') {
        let codeRegion = changes[propName].currentValue;

        if (codeRegion !== '-1') {
          this.getMuseesByRegions(codeRegion);
        } else {
          this.getAllMusees();
        }

      }

      if (propName === 'codeRegionListeDeroulante') {
        let codeRegion = changes[propName].currentValue;

        if (codeRegion !== '-1') {
          this.getMuseesByRegions(codeRegion);
        } else {
          this.getAllMusees();
        }

      }

      if (propName === 'codeDepartementListeDeroulante') {
        let codeDepartement = changes[propName].currentValue;

        if (codeDepartement !== '-1') {
          this.getMuseesByDepartements(codeDepartement);
        }

      }

      if (propName === 'codeVilleListeDeroulante') {
        let codeVille = changes[propName].currentValue;

        console.log(codeVille);

        if (codeVille !== '-1') {
          this.getMuseesByVilles(codeVille);
        }

      }

      if (propName === 'codeTheme') {
        let idTheme = changes[propName].currentValue;

        if (idTheme !== '-1') {
          this.getMuseesByThemes(idTheme);
        }

      }

    }
  }

  getAllMusees() {
    this.museeService.getMuseesList().subscribe((musees: Musee[]) => {
      this.setMusees(musees);
    })
  }

  getMuseesByRegions(codeRegion: string) {
    this.museeService.getMuseesByRegion(codeRegion).subscribe((musees: Musee[]) => {
      this.setMusees(musees);
    })
  }

  getMuseesByDepartements(codeDepartement: string) {
    this.museeService.getMuseesByDepartement(codeDepartement).subscribe((musees: Musee[]) => {
      this.setMusees(musees);
    })
  }

  getMuseesByVilles(codeVille: string) {
    this.museeService.getMuseesByVille(codeVille).subscribe((musees: Musee[]) => {
      this.setMusees(musees);
    })
  }

  getMuseesByThemes(codeTheme: number) {    
    this.museeService.getMuseesByTheme(codeTheme).subscribe((liste1) => {      
      this.listMusees = liste1.musees;
      this.setMusees(this.listMusees);
    })
  }
  
  setMusees(lstMusee: Musee[]) {
    lstMusee.forEach(musee => {
      if (musee.siteWeb && !musee.siteWeb.startsWith("http")) {
        musee.siteWeb = 'http://' + musee.siteWeb;
      }
    });
    this.listMusees = lstMusee;
    this.setDataSourceTab();
  }
  
  setDataSourceTab() {
    this.dataSource = new MatTableDataSource<Musee>(this.listMusees);
    this.dataSource.paginator = this.paginator;
  }

  onClick(st: string) {
    this.codeMusee.emit(st);
  }

  recupererIdURL() {    
    this.codeTheme = parseInt(this.router.snapshot.paramMap.get('idTheme'));
  }
}