import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from "../authentification.service";
import {User} from "../models/user";


@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.css']
})
export class UpdateProfilComponent implements OnInit {

  majUser: User = new User();

  constructor(private auth : AuthentificationService) {

  }

  userModifie() {

    this.auth.updateUser(this.majUser).subscribe(user => user);
  }

  ngOnInit() {
    this.majUser.idUser = this.auth.idUser;
    this.majUser.nom = this.auth.nom;
    this.majUser.prenom = this.auth.prenom;
    this.majUser.mail = this.auth.mail;
    this.majUser.voie = this.auth.voie;
    this.majUser.ville = this.auth.ville;
    this.majUser.codePostal = this.auth.codePostal;
    this.majUser.mdp = this.auth.mdp;
  }

}
