import { Category } from './../../class/category';
import { Env } from './../../env';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CategoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CategoryProvider Provider');
  }

  getCategories(){
    return this.http.get(Env.site_url+Env.api_url+Env.posts_ep).map((rawJson: any[])=>{
      return rawJson.map((item)=>{
        let category = {
          id: item.id,
          description: item.description,
          name: item.name,
          count: item.count,
          parent: item.parent,
          taxonomy: item.taxonomy
        } as Category;
        return category;
      });
    });
  }

}
