import { AuthLoginProvider } from './../../providers/auth-login/auth-login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authLoginProvider: AuthLoginProvider) {

  }

  login(){
    this.authLoginProvider.login(this.username, this.password).subscribe((response) => {
      
      localStorage.setItem('loginDetails', JSON.stringify(response));
      this.navCtrl.pop();
    });
  }

}
