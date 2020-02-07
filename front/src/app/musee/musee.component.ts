import { Component, OnInit } from '@angular/core';
import { MuseeService} from '../musee.service';
import {Musee} from '../models/musee';

@Component({
  selector: 'app-musee',
  templateUrl: './musee.component.html',
  styleUrls: ['./musee.component.css']
})
export class MuseeComponent implements OnInit {

  musee: Musee;

  constructor(private museeService: MuseeService) {}

  ngOnInit() {
    this.museeService.getMuseeById('1');
  }

}
