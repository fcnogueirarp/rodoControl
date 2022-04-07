import { Component, OnInit } from '@angular/core';
import { Card } from 'src/card';
import { cards } from '../../../cards'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  cards: Card[] = [...cards]

  show: boolean = false;
  constructor() {}

  ngOnInit(): void {}


}
