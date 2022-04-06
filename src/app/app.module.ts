import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { FretesComponent } from './pages/fretes/fretes.component';
import { MediasComponent } from './pages/medias/medias.component';
import { CadastrosComponent } from './pages/cadastros/cadastros.component';
import { ManutencoesComponent } from './pages/manutencoes/manutencoes.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';
import { PneusComponent } from './pages/pneus/pneus.component';
import { MotoristaComponent } from './pages/motorista/motorista.component';
import { CteComponent } from './pages/cte/cte.component';
import { NfeComponent } from './pages/nfe/nfe.component';
import { DespesasComponent } from './pages/despesas/despesas.component';
import { CtrcComponent } from './pages/ctrc/ctrc.component';
import { EdiComponent } from './pages/edi/edi.component';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TitleComponent } from './components/title/title.component';
import { LinkbuttonComponent } from './components/linkbutton/linkbutton.component';
import { CepComponent } from './pages/cep/cep.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FretesComponent,
    MediasComponent,
    CadastrosComponent,
    ManutencoesComponent,
    FinanceiroComponent,
    VeiculosComponent,
    PneusComponent,
    MotoristaComponent,
    CteComponent,
    NfeComponent,
    DespesasComponent,
    CtrcComponent,
    EdiComponent,
    HomeComponent,
    FretesComponent,
    MediasComponent,
    CadastrosComponent,
    ManutencoesComponent,
    FinanceiroComponent,
    VeiculosComponent,
    PneusComponent,
    MotoristaComponent,
    CteComponent,
    NfeComponent,
    DespesasComponent,
    CtrcComponent,
    EdiComponent,
    ToolbarComponent,
    TitleComponent,
    LinkbuttonComponent,
    CepComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
