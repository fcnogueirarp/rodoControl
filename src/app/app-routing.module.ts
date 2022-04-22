import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrosComponent } from './pages/cadastros/cadastros.component';
import { CepComponent } from './pages/cep/cep.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { CteComponent } from './pages/cte/cte.component';
import { CtrcComponent } from './pages/ctrc/ctrc.component';
import { DespesasComponent } from './pages/despesas/despesas.component';
import { EdiComponent } from './pages/edi/edi.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';
import { FretesComponent } from './pages/fretes/fretes.component';
import { HomeComponent } from './pages/home/home.component';
import { ManutencoesComponent } from './pages/manutencoes/manutencoes.component';
import { MediasComponent } from './pages/medias/medias.component';
import { MotoristaComponent } from './pages/motorista/motorista.component';
import { NfeComponent } from './pages/nfe/nfe.component';
import { PneusComponent } from './pages/pneus/pneus.component';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'consultas', component: ConsultasComponent },
  { path: 'cte', component: CteComponent },
  { path: 'ctrc', component: CtrcComponent },
  { path: 'despesas', component: DespesasComponent },
  { path: 'edi', component: EdiComponent },
  { path: 'financeiro', component: FinanceiroComponent },
  { path: 'fretes', component: FretesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'manutencoes', component: ManutencoesComponent },
  { path: 'medias', component: MediasComponent },
  { path: 'motorista', component: MotoristaComponent },
  { path: 'nfe', component: NfeComponent },
  { path: 'pneus', component: PneusComponent },
  { path: 'veiculos', component: VeiculosComponent },
  { path: 'CEP', component: CepComponent },
  { path: 'consulta/cadastros', component: CadastrosComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
