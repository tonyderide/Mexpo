import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Musee} from '../models/musee';
import {MuseeService} from '../musee.service';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {Theme} from '../models/theme';

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

  constructor(private museeService: MuseeService,
              private route: Router ) {
  }

  ngOnInit(): void {
    this.recupeMuseeList();
    this.recupeThemeList();
    console.log(this.recupeMuseeList());
    console.log(this.recupeThemeList());
    this.filteredOptionMusee();
    this.filteredOptionTheme();
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

  recupeMuseeList() {
    return this.museeService.getMuseesList()
      .subscribe((musee) => {this.listMusee = musee; });
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
    if (this.selectedCriteria === 'musees') {this.route.navigate(['musees', this.selectedMusee.idMusee]);}
    if (this.selectedCriteria === 'themes') {this.route.navigate(['themes', this.selectedTheme.idTheme]);}
  }
}
