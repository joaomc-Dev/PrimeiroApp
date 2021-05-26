import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular'; 

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  public amigos = [
    {Nome:'Chuck Norris',idade:'?',NivelDeAmizade:'Ele quem decide',Forca:'Maior que a sua'},
    {Nome:'Xaulin Mata porco',idade:32,NivelDeAmizade:8/10 ,Forca:'o suficiente pra socar a pepa'},
    {Nome:'Tonho da borracharia',idade:54,NivelDeAmizade:6/10,Forca:'tira um pneu de caminhão com a unha'},
    {Nome:'Zé Gotinha',idade:12,NivelDeAmizade:'10/10, o cara é brabo',Forca:'O suficiente pra quebrar o Corona virus na porrada'},
    {Nome:'Rambo Cearense',idade:48,NivelDeAmizade:10/10,Forca:'Derruba um cacto na cabeçada'}

  ];

  constructor(public actionSheetController: ActionSheetController) { }
  public async friendActions({ Nome }) {
    const actionSheet = await this.actionSheetController.create({
      header: Nome,
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('remover do array');
            console.log('friends', this.amigos);
            this.amigos.forEach((amg, i) => {
              if (amg.Nome === Nome) {
                this.amigos.splice(i, 1);
                return null;
              }
            });

            console.log('friends', this.amigos);
          },
        },
        {
          text: 'Edit',
          icon: 'share',
          handler: () => {
            console.log('Editar selecionado clicked');
          },
        },

        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
         
          }
        }]
      })
      await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  ngOnInit() {
  }

}