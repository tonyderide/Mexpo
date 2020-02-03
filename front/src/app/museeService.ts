import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MuseeService {
  private baseUrl = 'http://localhost:8080/mxpo/musee';

  constructor(private http: HttpClient) { }

  getMusee(idMusee: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idMusee}`);
  }

  createMusee(musee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, musee);
  }

  updateMusee(idMusee: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${idMusee}`, value);
  }

  deleteMusee(idMusee: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idMusee}`, { responseType: 'text' });
  }

  getMuseeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
