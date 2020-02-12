import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {User} from "./models/user";
import {catchError} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private baseUrl = "http://localhost:8080/";
  constructor(private http: HttpClient) { }

  // créer un Utilisateur
  postAddUser(user: User): Observable<any> {
    console.log(user);
    return this.http.post<User>(this.baseUrl + 'users/add', user);
  }

}
