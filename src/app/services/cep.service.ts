import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICep } from '../pages/cep/icep';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  cep: string | null = '14092040';
  private readonly ApiCep = `https://viacep.com.br/ws/${this.cep}/json/`;

  constructor(private http: HttpClient) {}

  listaCep(): Observable<ICep> {
    return this.http.get<ICep>(this.ApiCep);
  }
}
