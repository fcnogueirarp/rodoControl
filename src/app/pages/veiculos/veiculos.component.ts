import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.sass']
})
export class VeiculosComponent implements OnInit {
  pageTitle: string = "Cadastro de Veículos"
  constructor() { }

  ngOnInit(): void {
  }

}
