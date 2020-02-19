import {Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../authentification.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  activeMenu: boolean = false;

  constructor(private auth : AuthentificationService) {}

  ngOnInit() {}

  handleClickMenu(){
    this.activeMenu = !this.activeMenu;
  }


  onClick() {
    this.activeMenu = false;
  }

}
