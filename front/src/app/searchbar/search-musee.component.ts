import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
import {filter, map, startWith} from 'rxjs/operators';
import { Musee } from '../models/musee'
import { MuseeService } from '../musee.service';
import {FormControl} from '@angular/forms';
import { options } from '../searchbar/listNomMusee'

@Component({
  selector: 'app-search-musee',
  templateUrl: './search-musee.component.html',
  styleUrls: ['./search-musee.component.scss']
})

export class SearchMuseeComponent implements OnInit {
  myControl = new FormControl();
  listMusee: Musee[] = [];
  listNomMusee = options;
  filteredOption: Observable<Musee[]>;
  displayFn(subject) {return subject ? subject.nomMusee : undefined; }

  constructor(private museeService: MuseeService) {
  }

  ngOnInit(): void {
    this.recupeMuseeList();
    console.log(this.recupeMuseeList())
    this.filteredOption = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(value => value ? this._filter(value) : this.listMusee.slice())
      );
  }

  // displayFn(musee: Musee): string {
  //   return musee && musee.idMusee ? musee.idMusee : '';
  // }

  private _filter(name: string): Musee[] {
    const filterValue = name;
    return this.listMusee.filter(option => option.idMusee/*.toLowerCase()*/.indexOf(filterValue) === 0);
  }


  recupeMuseeList() {
    return this.museeService.getMuseesList()
      .subscribe((musee$) => {this.listMusee = musee$; });
  }
}
// ngOnInit(): void {
//   // console.log(this.museeService.getMuseesList());

//   this.listMusee$= this.searchTerms.pipe(
//     debounceTime(300),
//     distinctUntilChanged(),
//     switchMap((term:string) => this.museeService.getMuseeById(term))
//     );
//   console.log(this.listMusee$);
// }
// displayfonction(subject){
//   return subject ? subject : undefined;
// }

// }
// search(term):void {
//   this.searchTerms.next(term);
//   console.log(term);
// }

