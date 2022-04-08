import { Component, OnInit } from '@angular/core';
import { Card } from 'src/card';
import { cards } from '../../../cards';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  breakpoint: any;
  cards: Card[] = [...cards];

  show: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 480 ? 1 : 4;
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 480 ? 1 : 4;
  }
}
