import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.sass'],
})
export class CadastrosComponent implements OnInit {
  pageTitle = 'Cadastros';

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {

  }
}
