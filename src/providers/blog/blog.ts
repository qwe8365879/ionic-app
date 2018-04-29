import { Blog } from './../../class/blog';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Env } from './../../env';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/observable/interval";


/*
  Generated class for the BlogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BlogProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BlogProvider Provider');
  }

  getBlogs(): Observable<Blog[]>{
    return this.http.get(Env.site_url+Env.api_url+Env.posts_ep).map((rawJson: any[])=>{
      return rawJson.map((item)=>{
        let blog = new Blog;
        blog.id = item.id;
        blog.title = item.title.rendered;
        blog.author_id = item.author;
        blog.slug = item.slug;
        blog.description = item.content.rendered;
        blog.created_at = item.date;
        blog.updated_at = item.modified;
        
        return blog;
      });
    })
  }

}
