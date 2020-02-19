import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Musee} from '../models/musee';
import {MuseeService} from '../musee.service';
import {Observable} from 'rxjs';
import {Theme} from '../models/theme';

@Component({
  selector: 'app-fiche-musee',
  templateUrl: './fiche-musee.component.html',
  styleUrls: ['./fiche-musee.component.css']
})
export class FicheMuseeComponent implements OnInit {
  musee: Observable<Musee>;
  theme: Observable<Theme>;
  constructor(private museeService: MuseeService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.musee = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.museeService.getMuseeById(params.get('idMusee'))
      ));

    this.theme = this.route.paramMap.pipe(
      switchMap((paramstheme: ParamMap) =>
        this.museeService.getThemeById(+paramstheme.get('idTheme'))
    ));
  }
}
