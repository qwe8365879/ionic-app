import { MediaProvider } from './../media/media';
import { Blog } from './../../class/blog';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Env } from './../../env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/observable/interval";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/*
  Generated class for the BlogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BlogProvider {

  constructor(
    public http: HttpClient,
    private mediaProvider: MediaProvider
  ) { }

  getBlogs(): Observable<any>{
    // return this.http.get(Env.site_url+Env.api_url+Env.posts_ep).map((rawJson: any[])=>{
    //   return rawJson.map((item)=>{
    //     let blog = new Blog;
    //     blog.id = item.id;
    //     blog.title = item.title.rendered;
    //     blog.author_id = item.author;
    //     blog.slug = item.slug;
    //     blog.description = item.content.rendered;
    //     blog.createdAt = item.date;
    //     blog.updatedAt = item.modified;
    //     blog.featuredMediaID = item.featured_media;

    //     this.mediaProvider.getMedia(blog.featuredMediaID).subscribe(media => blog.featuredMedia = media);
        
        
    //     return blog;
    //   });
    // });
    return this.http.get<any>(Env.site_url+Env.api_url+Env.posts_ep).map(res => res.json())
    .mergeMap(blogs => {
      console.dir(blogs);
      let blog = new Blog;
      blog.id = blogs[0].id;
      blog.featuredMediaID = blogs[0].featured_media;
      return this.mediaProvider.getMedia(blog.featuredMediaID)
    })
  }

}
