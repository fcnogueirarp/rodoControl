import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cte',
  templateUrl: './cte.component.html',
  styleUrls: ['./cte.component.sass'],
})
export class CteComponent implements OnInit {
  longText = `O Conhecimento de Transporte eletrônico (CTe) é um documento que existe com o
  objetivo de registrar, para fins fiscais, as prestações de serviço do
  transporte de cargas realizadas no Brasil. Por ser um documento eletrônico,
  isso significa que toda a sua existência é digital, ou seja, ele é emitido e
  armazenado apenas por meios eletrônicos. O CTe deve ser emitido sempre que
  houver uma prestação de serviço de transporte de cargas realizada entre
  municípios ou entre estados da federação. Sua emissão é necessária e
  obrigatória para serviços de transporte em qualquer um dos modais: rodoviário,
  aéreo, ferroviário, aquaviário ou dutoviário.`;
  constructor() {}

  ngOnInit(): void {}
}
