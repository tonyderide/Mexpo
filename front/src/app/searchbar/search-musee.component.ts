import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Musee} from '../models/musee';
import {MuseeService} from '../musee.service';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {Theme} from '../models/theme';
import { Observable, Subject } from "rxjs";
import {debounceTime, distinctUntilChanged, map, startWith, switchMap} from 'rxjs/operators';
import { Globals } from '../global';
import { OeuvreArtiste } from '../models/oeuvreartiste';

@Component({
  selector: 'app-search-musee',
  templateUrl: './search-musee.component.html',
  styleUrls: ['./search-musee.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SearchMuseeComponent implements OnInit {
  myControl = new FormControl();
  myControltheme = new FormControl();
  listMusee: Musee[] = [];
  listTheme: Theme[] = [];
  filteredOption: Observable<Musee[]>;
  filteredOptionT: Observable<Theme[]>;
  selectedMusee: Musee;
  selectedTheme: Theme;

  selectedCriteria = 'musees';

  recherche : string = "";
  listMusees: Musee[];
  listOeuvres: OeuvreArtiste[];

  constructor(private museeService: MuseeService, private globals: Globals, private router: Router) {
    this.recherche = globals.recherche;
    this.listMusees = globals.listeMuseeRecherche;
    this.listOeuvres = globals.listeOeuvreRecherche;
  }

  ngOnInit(): void {
    this.recupeMuseeList();
    this.recupeThemeList();
    this.filteredOptionMusee();
    this.filteredOptionTheme();
  }

  /**
   * Récupérer la valeur écrite dans la barre de recherche
   */
  setValueRecherche() {
    this.getOeuvresByRechercheOeuvre(this.recherche);
    // this.getMuseesByRechercheMusee(this.recherche);
    this.globals.recherche = this.recherche;
  }
  filteredOptionMusee() {
    this.filteredOption = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.nomMusee),
        map(nomMusee => nomMusee ? this._filter(nomMusee) : this.listMusee.slice())
      );
  }

  filteredOptionTheme() {
    this.filteredOptionT = this.myControltheme.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.nomTheme),
        map(nomTheme => nomTheme ? this._filtertheme(nomTheme) : this.listTheme.slice())
      );
  }
  /**
   * Récupérer la liste des musées correspondant aux critères de la recherche par "Musées" à partir de l'API externe
   * @param rechercheMusee 
   */
  getMuseesByRechercheMusee(rechercheMusee : string) {
    this.museeService.getMuseeByRecherche(rechercheMusee).subscribe((musees: Musee[]) => {
      this.listMusees = musees;
      this.globals.listeMuseeRecherche = this.listMusees;
      // Se déplacer dans le menu musée
      this.router.navigate(['musees'])
    })
  }

  recupeMuseeList() {
    return this.museeService.getMuseesList()
      .subscribe((musee) => {this.listMusee = musee; });
  }
  getOeuvresByRechercheOeuvre(rechercheMusee: string) {
     this.museeService.getOeuvreByRecherche(rechercheMusee).subscribe((oeuvres: OeuvreArtiste[]) => {
       this.listOeuvres = oeuvres;
       this.globals.listeOeuvreRecherche = this.listOeuvres;
       this.router.navigate(['oeuvres']);
     })
  }

  recupeThemeList() {
    return this.museeService.getThemeList()
      .subscribe((theme) => {this.listTheme = theme; console.log(theme); });
  }

  displayFn(musee: Musee): string {
    return musee && musee.nomMusee ? musee.nomMusee : '';
  }

  displayFnTheme(theme: Theme): string {
    return theme && theme.nomTheme ? theme.nomTheme : '';
  }

  private _filter(name: string): Musee[] {
    const filterValue = name;
    return this.listMusee.filter(option => {
      if (option.nomMusee) {
        return option.nomMusee.toLowerCase().startsWith(filterValue);
      }
      // option.nomMusee/*.toLowerCase()*/.indexOf(filterValue) === 0
    });
  }

  private _filtertheme(name: string): Theme[] {
    const filterValue = name;
    return this.listTheme.filter(option => {
      if (option.nomTheme) {
        return option.nomTheme.toLowerCase().startsWith(filterValue);
      }
      // option.nomMusee/*.toLowerCase()*/.indexOf(filterValue) === 0
    });
  }

  getSelectedMusee(selectedMusee: Musee) {
    this.selectedMusee = selectedMusee;
  }

  getSelectedTheme(selectedTheme: Theme) {
    this.selectedTheme = selectedTheme;
  }

  onClick() {
    if (this.selectedCriteria === 'musees') {this.router.navigate(['musees', this.selectedMusee.idMusee]);}
    if (this.selectedCriteria === 'themes') {this.router.navigate(['themes', this.selectedTheme.idTheme]);}
  }
}
