import { Component, OnInit, Output, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CepService } from 'src/app/services/cep.service';
import { ICep } from './icep';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.sass'],
})
export class CepComponent implements OnChanges {
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

  ngOnChanges(): void {
    this.searchCep;
  }

  getCep(): void {
    this.service.listaCep().subscribe((cep) => console.log((this.ceps = cep)));
  }

  showCep() {
    this.searchCep = this.cepForm.value.cep;
    localStorage.setItem('cep', this.searchCep);
  }
}
