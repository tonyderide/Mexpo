import { Component, OnInit, Input } from '@angular/core';
import { MuseeService } from '../musee.service';
import { Musee } from '../models/musee';

@Component({
  selector: 'app-musee',
  templateUrl: './musee.component.html',
  styleUrls: ['./musee.component.css']
})
export class MuseeComponent implements OnInit {

  codeMusee: string;
  musee: Musee;

  constructor(private museeService: MuseeService) {
  }

  ngOnInit() {
    this.recupeMusee();

  }

  onCodeMusee(st: string) {
    this.codeMusee = st;
  }

  recupeMusee(): void {
    if (this.codeMusee)
      this.museeService.getMuseeById(this.codeMusee)
        .subscribe((musee) => {
          this.musee = musee;
          console.log(this.musee);
        });
  }

}
