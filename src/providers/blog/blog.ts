import { Blog } from './../../class/blog';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Env } from './../../env';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    public http: HttpClient
  ) { }

  getBlogs(filter?: HttpParams | {}): Observable<Blog[]>{
    return this.http.get(Env.site_url+Env.api_url+Env.posts_ep, {
      params: filter
    }).map((rawJson: any[])=>{
      return rawJson.map((item)=>{
        return {
          id: item.id,
          title: item.title.rendered,
          author_id: item.author,
          slug: item.slug,
          description: item.content.rendered,
          createdAt: item.date,
          updatedAt: item.modified,
          featuredMediaID: item.featured_media
        }
      });
    });
  }

}
