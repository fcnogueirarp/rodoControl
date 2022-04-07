import { Component, OnInit } from '@angular/core';
import { FreteService } from '../../services/frete.service';
import { IFrete } from './frete';

@Component({
  selector: 'app-fretes',
  templateUrl: './fretes.component.html',
  styleUrls: ['./fretes.component.sass'],
})
export class FretesComponent implements OnInit {
  frete = {
    codigo: '',
    valor: '',
    prazoEntrega: '',
    valorSemAdicionais: '',
    valorMaoPropria: '',
    valorAvisoRecebimento: '',
    valorValorDeclarado: '',
    entregaDomiciliar: '',
    entregaSabado: '',
    erro: '',
  };
  constructor(private freteService: FreteService) {
    this.getFrete();
  }

  ngOnInit(): void {}

  getFrete() {
    this.freteService.listaFrete().subscribe((fr) => console.log);
  }
}
