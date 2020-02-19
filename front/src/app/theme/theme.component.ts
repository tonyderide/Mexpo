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

  ngOnInit() {
    this.recupeTheme();
  }
  recupeTheme(): void {
    this.museeService.getThemeById(this.idTheme)
      .subscribe((theme) => {
        this.theme = theme;
        console.log(this.theme);
      });
  }
}
