import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials = {
    email: '',
    password: ''
  }

  constructor(private auth: ApiService, private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async login() {
    if (this.credentials.email != '' && this.credentials.password != '') {

      this.auth.login(this.credentials.email, this.credentials.password).subscribe(async res => {
        if (res) {
          this.router.navigateByUrl('/produtos');
        }

        else {
          const alert = await this.alertCtrl.create({
            header: 'Login Failed',
            message: 'Email or Password Incorrect',
            buttons: ['OK']
          });
          await alert.present();
        }
      })


    } else {
      const alert = await this.alertCtrl.create({
        header: 'Login Failed',
        message: 'Insert Email and Password',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}