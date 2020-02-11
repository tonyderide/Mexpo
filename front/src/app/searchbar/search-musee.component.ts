import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Musee} from '../models/musee'
import { MuseeService } from "../musee.service";


@Component({
  selector: 'app-search-musee',
  templateUrl: './search-musee.component.html',
  styleUrls: ['./search-musee.component.scss']
})

export class SearchMuseeComponent implements OnInit {
  listMusee$: Musee[];
  private searchTerms = new Subject<string>();


  constructor(private museeService: MuseeService) {
  }

  ngOnInit(): void {
    this.recupeMuseeList();
  }

  recupeMuseeList(): void {
    this.museeService.getMuseesList()
      .subscribe((musee$: any) => {
        this.listMusee$ = musee$;
        console.log(this.listMusee$);
      });
  };
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

