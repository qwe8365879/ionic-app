import { MediaProvider } from './../../providers/media/media';
import { BlogProvider } from './../../providers/blog/blog';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BlogPage } from "../blog/blog";
import { LocalNotifications } from "@ionic-native/local-notifications";

import { Blog } from "../../class/blog";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  blogs: Blog[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private localNotifications: LocalNotifications,
    private blogProvider: BlogProvider,
    private mediaProvider: MediaProvider
  ) { }

  ngOnInit(){
    this.blogProvider.getBlogs().subscribe((blogs) => {
      for(let i = 0; i < blogs.length; i++){
        this.mediaProvider.getMedia(blogs[i].featuredMediaID).subscribe((media) => {
          blogs[i].featuredMedia = media;
          this.blogs[i] = blogs[i];
        })
      }
      
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
