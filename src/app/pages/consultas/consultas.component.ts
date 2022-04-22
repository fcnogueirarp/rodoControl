import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from 'src/app/services/funcionarios.service';
import { IFuncionario } from './IFuncionario';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.sass'],
})
export class ConsultasComponent implements OnInit {
  funcionarios: IFuncionario[] = [
    {
      nome: '',
      cpf: '',
      email: '',
      habilitacao: '',
    },
  ];

  constructor(private service: FuncionariosService) {
    this.setFuncionarios();
  }

  ngOnInit(): void {}

  setFuncionarios() {
    this.service
      .setFuncionarios()
      .subscribe((funcionario) => (this.funcionarios = funcionario));
  }
}
