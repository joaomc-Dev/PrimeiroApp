import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {

  public viagens = [
    {Local:'azerbaijão',Descricao:'Lugar da hora',Data:'27/02/2015',Imagem:'../../assets/img/azerbaijao.jpg'},
    {Local:'Amsterdã',Descricao:'Pensa em uns moinhos da hr',Data:'28/03/2027',Imagem:'../../assets/img/amsterdam.jpg'}
 

  ];

  constructor() { }

  ngOnInit() {
  }

}
