import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MuseeService {

  private baseUrl = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  // Récupérer le JSON de toutes les régions
  getRegionList(): Observable<any> {
    return this.http.get(this.baseUrl + "regions")
  }

  // Récupérer le JSON de touts les départements
  getDepartementList(): Observable<any> {
    return this.http.get(this.baseUrl + "departements")
  }

  // Récupérer le JSON de toutes les villes
  getVilleList(): Observable<any> {
    return this.http.get(this.baseUrl + "villes")
  }

  // Récupérer le JSON des départements d'une région spécifique
  getDepartementsByRegion(codeRegion: String) : Observable<any> {
    return this.http.get(this.baseUrl + codeRegion + "/departements");
  }

}
