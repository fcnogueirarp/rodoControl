import { Component, OnInit } from '@angular/core';
import { Card } from 'src/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  cards: Card[] = [
    {
      id: 1,
      title: 'cadastros',
      image: 'how_to_reg',
    },
    {
      id: 2,
      title: 'cte',
      image: 'newspaper',
    },
    {
      id: 3,
      title: 'ctrc',
      image: 'newspaper',
    },
    {
      id: 4,
      title: 'despesas',
      image: 'account_balance',
    },
    {
      id: 5,
      title: 'edi',
      image: 'newspaper',
    },
    {
      id: 6,
      title: 'financeiro',
      image: 'paid',
    },
    {
      id: 7,
      title: 'fretes',
      image: 'local_shipping',
    },
    {
      id: 8,
      title: 'manutencoes',
      image: 'handyman',
    },
    {
      id: 9,
      title: 'medias',
      image: 'functions',
    },
    {
      id: 10,
      title: 'motorista',
      image: 'person_add_alt_1',
    },
    {
      id: 11,
      title: 'nfe',
      image: 'newspaper',
    },
    {
      id: 12,
      title: 'CEP',
      image: 'newspaper',
    },
    {
      id: 13,
      title: 'pneus',
      image: 'trip_origin',
    },
    {
      id: 14,
      title: 'veiculos',
      image: 'commute',
    },
  ];

  show: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
