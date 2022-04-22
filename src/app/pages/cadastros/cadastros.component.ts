import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FuncionariosService } from 'src/app/services/funcionarios.service';
import { IFuncionario } from '../consultas/IFuncionario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.sass'],
})
export class CadastrosComponent implements OnInit {
  pageTitle = 'Cadastros';

  funcionarioForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    habilitacao: new FormControl('', Validators.required),
    rua: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    bairro: new FormControl('', Validators.required),
    cep: new FormControl('', Validators.required),
    cidade: new FormControl('', Validators.required),
    foto: new FormControl('', Validators.required),
  });

  constructor(
    private _formBuilder: FormBuilder,
    private funcionariosService: FuncionariosService,
    private router: Router
  ) {}

  ngOnInit() {}

  createFuncionario() {
    this.funcionariosService
      .createFuncionario(this.funcionarioForm.value)
      .subscribe((funcionario) => {
        this.router.navigate(['consultas']);
      });
  }
}
