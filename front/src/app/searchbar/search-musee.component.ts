import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from "rxjs";
import {debounceTime, distinctUntilChanged, map, startWith, switchMap} from 'rxjs/operators';
import { Musee } from '../models/musee'
import { MuseeService } from "../musee.service";
import {FormControl} from "@angular/forms";
import { options } from "../searchbar/listNomMusee"

@Component({
  selector: 'app-search-musee',
  templateUrl: './search-musee.component.html',
  styleUrls: ['./search-musee.component.scss']
})

export class SearchMuseeComponent implements OnInit {
  listMusee$: Musee[];
  // private searchTerms = new Subject<string>();
  myControl: FormControl = new FormControl();
  filteredOption : Observable<string[]>;
  listNomMusee= options;
  nomMusee: string;

  constructor(private museeService: MuseeService) {
  }

  ngOnInit(): void {
    this.recupeMuseeList();
    this.filteredOption = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
    private _filter(value: string): string[] {
      return this.listNomMusee.filter(option => option.toLowerCase().includes(value.toLowerCase()));
    }

  recupeMuseeList(): void {
    this.museeService.getMuseesList()
      .subscribe((musee$: Musee[]) => { this.listMusee$ = musee$;
      });


  }
  displayFn(subject) {return subject ? subject.nomMusee : undefined;}





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

