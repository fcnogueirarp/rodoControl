import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuncionariosService } from 'src/app/services/funcionarios.service';
import { IFuncionario } from './IFuncionario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.sass'],
})
export class ConsultasComponent implements OnInit {
  funcionarios: IFuncionario[] = [
    {
      id: 0,
      foto: '',
      nome: '',
      cpf: 0,
      email: '',
      habilitacao: '',
      rua: '',
      numero: 0,
      bairro: '',
      cep: '',
      cidade: '',
    },
  ];

  id: any;
  constructor(
    private service: FuncionariosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.setFuncionarios();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');
      this.service.retrieveFuncionario(this.id).subscribe((funcionario) => {});
    });
  }

  setFuncionarios() {
    this.service
      .listFuncionarios()
      .subscribe((funcionario) => (this.funcionarios = funcionario));
  }

  retrieveFuncionario(id: any) {
    alert('clicou');
    this.router.navigate(['edi']);
  }
}
