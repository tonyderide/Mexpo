import { Component, OnInit, Input } from '@angular/core';
import { MuseeService} from '../musee.service';

@Component({
  selector: 'app-musee',
  templateUrl: './musee.component.html',
  styleUrls: ['./musee.component.css']
})
export class MuseeComponent implements OnInit {

  codeMusee: String;


  constructor(private museeService: MuseeService) {
  }

  ngOnInit() {
    this.recupeMusee();

  }

  onCodeMusee(st : String) {
    this.codeMusee = st;
  recupeMusee(): void {
    this.museeService.getMuseeById(this.idMusee)
      .subscribe((musee) => {
        this.musee = musee;
        console.log(this.musee);
      });
  }

}
