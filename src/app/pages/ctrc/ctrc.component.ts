import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ctrc',
  templateUrl: './ctrc.component.html',
  styleUrls: ['./ctrc.component.sass'],
})
export class CtrcComponent implements OnInit {
  longText = `Entenda o CTRC: Conhecimento de Transporte Rodoviário de Cargas
   O Conhecimento de Transporte Rodoviário de Cargas é um documento emitido pelas transportadoras para informar quais as mercadorias serão transportadas entre o local de origem e o destino da carga.Ele contém os dados relativos ao transporte terrestre como informação da carga, frete e dados das partes envolvidas na operação.Confira neste artigo as informações que devem ser declaradas no CTRC e entenda as regras de emissão.`;
  constructor() {}

  ngOnInit(): void {}
}
