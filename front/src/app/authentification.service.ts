import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {User} from "./models/user";
import { Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private baseUrl = "http://localhost:8080/";

   idUser : number = Number(sessionStorage.getItem('idUser'))
   nom : string = sessionStorage.getItem('nom');
   prenom: string = sessionStorage.getItem('prenom');
   mail: string = sessionStorage.getItem('mail');
   voie: string = sessionStorage.getItem('voie');
   ville: string = sessionStorage.getItem('ville');
   codePostal: string = sessionStorage.getItem('codePostal');
   mdp: string = sessionStorage.getItem('mdp');


  constructor(private http: HttpClient, private router: Router) { }


  postAddUser(user: User): Observable<any> {
    console.log(user);
    return this.http.post<User>(this.baseUrl + 'users/add', user);
  }


  updateUser(majUser :User): Observable<any> {
    this.logout();
    setTimeout(
      () => {
        this.login(majUser.mail, majUser.mdp)
        this.router.navigate(['accueil'])
      }, 1
    );

   return this.http.post<User>(this.baseUrl + 'users/update', majUser);
  }



  deleteUser(idUser){
    idUser = Number(sessionStorage.getItem('idUser'));
    this.http.delete(this.baseUrl+'users/delete/'+ idUser).subscribe();
    this.logout();
    this.router.navigate(['accueil'])
  }


  login(mail, mdp) {
    this.http.get(`${this.baseUrl}users/login?mail=${mail}&mdp=${mdp}`).subscribe(
      (user : User) => {
        if (user !== null) {
          sessionStorage.setItem('idUser', String(+user.idUser));
          sessionStorage.setItem('nom', user.nom);
          sessionStorage.setItem('prenom', user.prenom);
          sessionStorage.setItem('mail', user.mail);
          sessionStorage.setItem('voie', user.voie);
          sessionStorage.setItem('ville', user.ville);
          sessionStorage.setItem('codePostal', user.codePostal);
          sessionStorage.setItem('mdp', user.mdp);

          setTimeout(
            () => {
              this.idUser = Number(sessionStorage.getItem('idUser'));
              this.nom = sessionStorage.getItem('nom');
              this.prenom = sessionStorage.getItem('prenom');
              this.mail = sessionStorage.getItem('mail');
              this.voie = sessionStorage.getItem('voie');
              this.ville = sessionStorage.getItem('ville');
              this.codePostal = sessionStorage.getItem('codePostal');
              this.mdp = sessionStorage.getItem('mdp');

              this.router.navigate(['accueil'])
            }, 100
          );

        }
      }
    )
  }



  logout() {
      sessionStorage.removeItem('isUser');
      sessionStorage.removeItem('nom');
      sessionStorage.removeItem('prenom');
      sessionStorage.removeItem('mail');
      sessionStorage.removeItem('voie');
      sessionStorage.removeItem('ville');
      sessionStorage.removeItem('codePostal');
      sessionStorage.removeItem('mdp');
      this.router.navigate(['accueil'])
  }

  isLoggedIn() {
    const idUser = sessionStorage.getItem('idUser');
    const nomUser = sessionStorage.getItem('nom');
    const prenomUser = sessionStorage.getItem('prenom')
    return (idUser !== null && nomUser !== null && prenomUser !== null);
  }

}
