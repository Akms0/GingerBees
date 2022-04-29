import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate : any;
  constructor() 
  {
    this.sideMenu();
  }


  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Produtos",
        url   : "/produtos"
      },
      {
        title : "Parceiro",
        url   : "/parceiro"
      },
      {
        title : "Cestas",
        url   : "/cestas"
      },
    ]
  }
}