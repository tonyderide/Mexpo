import { Component, OnInit, ViewChild, Input, SimpleChange } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Musee } from '../models/musee';
import { MuseeService } from '../musee.service';

@Component({
  selector: 'app-tableau-resultat-musee',
  templateUrl: './tableau-resultat-musee.component.html',
  styleUrls: ['./tableau-resultat-musee.component.css']
})
export class TableauResultatMuseeComponent implements OnInit {

  displayedColumns: string[] = ['N°', 'Musée', 'Adresse', 'Reservation'];
  listMusees: Musee[];
  dataSource: MatTableDataSource<Musee>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input() codeRegionListeDeroulante: String;
  @Input() codeDepartementListeDeroulante: String;
  @Input() codeVilleListeDeroulante: String;
  @Input() codeRegionCarte: String;

  constructor(private museeService: MuseeService) { }

  ngOnInit() {
    this.getAllMusees();
  }

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


    }
  }

  getAllMusees() {
    this.museeService.getMuseesList().subscribe((musees: Musee[]) => {
      this.setMusees(musees);
    })
  }

  getMuseesByRegions(codeRegion: String) {
    this.museeService.getMuseesByRegion(codeRegion).subscribe((musees: Musee[]) => {
      this.setMusees(musees);
    })
  }

  getMuseesByDepartements(codeDepartement: String) {
    this.museeService.getMuseesByDepartement(codeDepartement).subscribe((musees: Musee[]) => {
      this.setMusees(musees);
    })
  }

  getMuseesByVilles(codeVille: String) {
    this.museeService.getMuseesByVille(codeVille).subscribe((musees: Musee[]) => {
      this.setMusees(musees);
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


}