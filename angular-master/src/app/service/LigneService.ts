import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ligne } from '../ligne';
@Injectable({
  providedIn: 'root'
})
export class LigneService {
  private baseUrl = 'http://localhost:8080/api/v1/lignes';
  constructor(private http: HttpClient) { }
  getLignesById(id: number): Observable<Ligne> {
    return this.http.get<Ligne>(`${this.baseUrl}/${id}`);
  }
  createLigne(ligne: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, ligne);
  }
  updateLigne(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteLigne(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getEmployeesList(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }
  getLines(filter: object): Observable<any> {
    return this.http.post(`${this.baseUrl}`, filter);
  }
}
