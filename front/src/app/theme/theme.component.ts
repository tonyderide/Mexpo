import { Component, OnInit } from '@angular/core';
import { MuseeService } from '../musee.service';
import { Theme } from '../models/theme';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  theme: Theme;
  private idTheme = 1;
  constructor(private museeService: MuseeService) { }

  codeMusee: string;
  codeTheme: number = -1;

  ngOnInit() {
  }

  onCodeMusee(st : string) {
    this.codeMusee = st;
  }

  onCodecodeThemeSelectionne(int : number) {
    this.codeTheme = int;
    console.log("theme : " + this.codeTheme)
  }

}
