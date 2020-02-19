import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Musee } from '../models/musee';
import { MuseeService } from '../musee.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fiche-musee',
  templateUrl: './fiche-musee.component.html',
  styleUrls: ['./fiche-musee.component.css']
})
export class FicheMuseeComponent implements OnInit {

  @Input() codeMusee: string;
  
  codeTheme: number;

  musee: Musee;

  museeRecherche: Observable<Musee>;

  constructor(private museeService: MuseeService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.codeMusee !== "") {
      this.recupererIdURL();
      this.getMuseesById(this.codeMusee);
    }

  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    
    for (let propName in changes) {

      if (propName === 'codeMusee') {
        let codeMuseeTableau = changes[propName].currentValue;
        this.getMuseesById(codeMuseeTableau);
      }

    }
  }

  // Fonctions associées au Back

  getMuseesById(idMusee: string) {
    this.museeService.getMuseeById(idMusee).subscribe((musees: Musee) => {
      this.musee = musees;
    })
  }

  recupererIdURL() {
    this.codeMusee = this.route.snapshot.paramMap.get('idMusee');
  }

}
