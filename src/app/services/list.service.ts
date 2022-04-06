import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICep } from '../pages/cep/icep';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private readonly Api = 'https://viacep.com.br/ws/14092040/json/';
  constructor(private http: HttpClient) {}

  list(): Observable<ICep> {
    return this.http.get<ICep>(this.Api);
  }
}
