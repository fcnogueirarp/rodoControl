import { Component, OnInit } from '@angular/core';

export interface Edi {
  title: string;
  text: string;
}

@Component({
  selector: 'app-edi',
  templateUrl: './edi.component.html',
  styleUrls: ['./edi.component.sass'],
})
export class EdiComponent implements OnInit {
  textEdis: Edi[] = [
    {
      title: 'O QUE É EDI E QUAL SEU PAPEL NO TRANSPORTE DE CARGAS?',
      text: `Com os mercados cada vez mais competitivos, as empresas precisam buscar soluções que ajudem a otimizar seus processos e conseguir criar um diferencial. Para isso, a correta aplicação da tecnologia no apoio ao negócio torna-se essencial para o crescimento  e busca pela excelência.Nesse sentido, o conceito de EDI surgiu e com ele uma simplicidade maior no compartilhamento de informações. No artigo de hoje vamos falar mais sobre esse método, como ele pode ser aplicado na área de logística e os benefícios que ele proporciona. Continue com a leitura e confira agora mesmo!`,
    },
    { title: 'EDI — Electronic Data Interchange', text:`O EDI — Intercâmbio Eletrônico de Dados, em português — pode ser definido como uma tecnologia que possui o objetivo de padronizar e otimizar a comunicação entre sistemas de informação variados, independentemente de quem os desenvolveu.
    Essa troca de informações é viabilizada quando as empresas que desejam fazer a troca dos dados sigam um padrão, que precisa ser estabelecido entre elas. No mercado, ele é chamado de “layout EDI”, que é uma espécie de guia que orienta como os arquivos que serão transmitidos devem ser gerados.
    Dentre os mais variados layouts existentes, na área de logística os formatos que mais se destacam seguem o padrão “EDI PROCEDA”. São arquivos formatados de acordo com o padrão que ficou definido entre embarcador e transportadora na hora de formalizar como será feita a integração dos dados.
    `},
    { title: "Para que serve o EDI?", text:`Na verdade, o EDI possui diversas aplicações, nos mais variados ramos de negócio. Como o nome sugere, a ideia é viabilizar o intercâmbio de informações entre parceiros de negócio, fazendo com que a comunicação seja mais segura, ágil e menos onerosa.
    Como esse recurso faz com que os arquivos sejam transferidos de um sistema para o outro de forma automática, elimina a necessidade de trabalho manual na hora de inserir as informações, o que diminui drasticamente a possibilidade de ocorrência de erros.
    `},
  ];
  constructor() {}

  ngOnInit(): void {}
}
