import { Injectable, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICep } from '../pages/cep/icep';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CepService implements OnChanges{
  ngOnChanges(){}
  cep = localStorage.getItem('cep');
  private ApiCep = `https://viacep.com.br/ws/${this.cep}/json/`;

  constructor(private http: HttpClient) {}

  listaCep(): Observable<ICep> {
    return this.http.get<ICep>(this.ApiCep);
  }
}
