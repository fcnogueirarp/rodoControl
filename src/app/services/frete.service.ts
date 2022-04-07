import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFrete } from '../pages/fretes/frete';

@Injectable({
  providedIn: 'root',
})
export class FreteService {
  private readonly ApiFrete = `http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=08082650&sDsSenha=564321&sCepOrigem=70002900&sCepDestino=04547000&nVlPeso=1&nCdFormato=1&nVlComprimento=20&nVlAltura=20&nVlLargura=20&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=04510&nVlDiametro=0&StrRetorno=xml&nIndicaCalculo=3`;

  constructor(private http: HttpClient) {}

  listaFrete(): Observable<IFrete> {
    const httpHeaders = new HttpHeaders({
      'content-type': 'application/xml',
    });

    return this.http.get<IFrete>(this.ApiFrete, { headers: httpHeaders });
  }
}
