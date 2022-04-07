import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CepService } from 'src/app/services/cep.service';
import { ICep } from './icep';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.sass'],
})
export class CepComponent implements OnInit {
  searchCep: string = '';

  cepForm = new FormGroup({
    cep: new FormControl('', Validators.required),
  });
  pageTitle: string = 'Consulta CEP';
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

  constructor(private service: CepService) {
    this.getCep();
  }

  ngOnInit(): void {}

  getCep(): void {
    this.service.listaCep().subscribe((cep) => console.log((this.ceps = cep)));
    this.showCep();
  }

  showCep() {
    this.searchCep = this.cepForm.value.cep;
  }
}
