import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motorista',
  templateUrl: './motorista.component.html',
  styleUrls: ['./motorista.component.sass']
})
export class MotoristaComponent implements OnInit {
  pageTitle: string ="Cadastro de Motorista"
  constructor() { }

  ngOnInit(): void {
  }

}
