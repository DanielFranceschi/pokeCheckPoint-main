import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estados } from '../interfaces/estados';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {
  private Url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
  constructor(private http: HttpClient) {
   }

   list(): Observable<Estados[]> {
    return this.http.get<Estados[]>(this.Url) as Observable<Estados[]>;
  }
}