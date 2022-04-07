import { Component, OnInit } from '@angular/core';
import { cards } from '../../../cards';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass'],
})
export class ToolbarComponent implements OnInit {
  cards = ([] = [...cards]);
  constructor() {}

  ngOnInit(): void {}
}
