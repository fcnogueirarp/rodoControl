import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFuncionario } from '../pages/consultas/IFuncionario';

@Injectable({
  providedIn: 'root',
})
export class FuncionariosService {
  UrlBase = 'https://localhost:7183/api/funcionarios';
  constructor(private http: HttpClient) {}

  listFuncionarios() {
    return this.http.get<IFuncionario[]>(this.UrlBase);
  }
  retrieveFuncionario(id: number) {
    return this.http.get<IFuncionario>(`${this.UrlBase}/${id}`);
  }

  createFuncionario(funcionario: IFuncionario) {
    return this.http.post<IFuncionario>(this.UrlBase, funcionario);
  }

  updateFuncionario(funcionario: IFuncionario) {
    return this.http.put<IFuncionario>(`${this.UrlBase}`, funcionario);
  }

  deleteFuncionario(id: number) {
    return this.http.delete(`${this.UrlBase}/${id}`);
  }
}
