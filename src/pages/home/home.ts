import { BlogProvider } from './../../providers/blog/blog';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BlogPage } from "../blog/blog";
import { LocalNotifications } from "@ionic-native/local-notifications";

import { Blog } from "../../class/blog";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [BlogProvider]
})
export class HomePage implements OnInit {

  blogs: Blog[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private localNotifications: LocalNotifications,
    private blogProvider: BlogProvider
  ) { }

  ngOnInit(){
    this.blogProvider.getBlogs().subscribe((blogs) => {
      this.blogs = blogs;
    });
  }

  view(blog): void{

    // this.localNotifications.requestPermission().then(
    //   (permission) => {
    //     this.localNotifications.schedule({
    //       title: blog.title,
    //       text: blog.description,
    //     });
    //   }
    // );
    
    
    this.navCtrl.push(BlogPage, {
      blog: blog
    });

  }

}
