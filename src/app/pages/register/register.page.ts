import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user = {
    name: '',
    email: '',
    password: ''
  }

  constructor(private api: ApiService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  User() {
    if (this.user.name != '' && this.user.email != '' && this.user.password != '') {
      this.api.User(this.user).subscribe(result => {
        this.router.navigate(['/login']);
      });
    } else {
      this.presentAlert();
    }
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Create Fail',
      message: 'Insert the informations.',
      buttons: ['OK']
    });
    await alert.present();
  }

}
