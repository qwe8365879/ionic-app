import { HomePage } from './../home/home';
import { User } from './../../class/user';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, NavOptions } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  loginedUser: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    let loginDetails = localStorage.getItem('loginDetails');
    if( !loginDetails ){
      this.navCtrl.push(LoginPage,{});
    }else{
      let storedUser = JSON.parse( loginDetails );
      this.loginedUser = storedUser;
    }
    
  }

  logout() {
    localStorage.removeItem('loginDetails');
    this.loginedUser = null;
    this.navCtrl.parent.select(0);
  }

}
