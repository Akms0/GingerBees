import { AfterContentChecked, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})

export class ProdutosPage{
  
  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

}
