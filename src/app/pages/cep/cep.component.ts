import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { ICep } from './icep';


@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.sass'],
})
export class CepComponent implements OnInit {
  pageTitle: string = "Consulta CEP"
  ceps: ICep = {
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    ibge: '',
    gia: '',
    ddd: '',
    siafi: '',
  };

  constructor(private service: ListService) {
    this.getCep();
  }

  ngOnInit(): void {}

  getCep(): void {
    this.service.list().subscribe((cep) => console.log((this.ceps = cep)));
  }
}
