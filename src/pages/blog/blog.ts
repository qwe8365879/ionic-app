import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Blog } from "../../class/blog";

/**
 * Generated class for the BlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {

  blog: Blog;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.blog = navParams.get("blog");
  }

  ionViewDidLoad() {
    
  }

}
