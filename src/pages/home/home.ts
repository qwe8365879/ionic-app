import { CategoryProvider } from './../../providers/category/category';
import { Category } from './../../class/category';
import { MediaProvider } from './../../providers/media/media';
import { BlogProvider } from './../../providers/blog/blog';
import { Component, OnInit, ViewChild, Directive, Input } from '@angular/core';
import { NavController, NavParams, SegmentButton } from 'ionic-angular';
import { BlogPage } from "../blog/blog";
import { LocalNotifications } from "@ionic-native/local-notifications";

import { Blog } from "../../class/blog";

@Directive({
  selector: '[ViewChildDir]'
})
export class ViewChildDir {
  @Input('id') id: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  @ViewChild(SegmentButton) categoriesSegmentButton: SegmentButton;
  

  blogs: Blog[];

  categories: Category[];
  currentCategoryId: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private localNotifications: LocalNotifications,
    private blogProvider: BlogProvider,
    private mediaProvider: MediaProvider,
    private categoryProvider: CategoryProvider
  ) { }

  ionViewWillEnter() {}

  ngOnInit(){
    this.getCategories();
    // this.blogs = [];
    // this.blogProvider.getBlogs().subscribe((blogs) => {
    //   for(let i = 0; i < blogs.length; i++){
    //     this.mediaProvider.getMedia(blogs[i].featuredMediaID).subscribe((media) => {
    //       blogs[i].featuredMedia = media;
    //       this.blogs.push( blogs[i] );
    //     })
    //   }
    //   // this.blogs = blogs;
    // });
  }

  private getCategories(){
    this.categoryProvider.getCategories().subscribe((categories) => {
      
      this.categories = categories;
      this.selectCategory(categories[0].id);
      setTimeout(() => {
        if (this.categoriesSegmentButton) {
          this.categoriesSegmentButton.onClick();
        }
      });
    });
  }

  selectCategory(id: number){
    this.blogs = [];
    this.blogProvider.getBlogs({
      categories: id
    }).subscribe((blogs) => {
      for(let i = 0; i < blogs.length; i++){
        this.mediaProvider.getMedia(blogs[i].featuredMediaID).subscribe((media) => {
          blogs[i].featuredMedia = media;
          this.blogs.push( blogs[i] );
        })
      }
    });
    console.log(this.currentCategoryId);
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
