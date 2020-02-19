import { Component, OnInit } from '@angular/core';
import { MuseeService} from '../musee.service';
import {Musee} from '../models/musee';

@Component({
  selector: 'app-musee',
  templateUrl: './musee.component.html',
  styleUrls: ['./musee.component.css']
})
export class MuseeComponent implements OnInit {

  musee = Musee;
  idMusee = 'M0002';


  constructor(private museeService: MuseeService) {
  }

  ngOnInit() {
    this.recupeMusee();

  }

  recupeMusee(): void {
    this.museeService.getMuseeById(this.idMusee)
      .subscribe((musee) => {
        this.musee = musee;
        console.log(this.musee);
      });
  }
}
