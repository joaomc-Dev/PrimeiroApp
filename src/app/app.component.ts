import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: './home', icon: 'home', },
    { title: 'Amigos', url: './amigos', icon: 'people' },
    { title: 'Viagens', url: './viagens', icon: 'airplane' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
@Component({
  selector: 'menu-example',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class MenuExample {

constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}