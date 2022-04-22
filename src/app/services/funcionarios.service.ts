import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFuncionario } from '../pages/consultas/IFuncionario';

@Injectable({
  providedIn: 'root',
})
export class FuncionariosService {
  UrlBase = 'https://localhost:7183/api/funcionarios';
  constructor(private http: HttpClient) {
  }

  setFuncionarios(){
    return this.http.get<IFuncionario[]>(this.UrlBase);
  }
}
