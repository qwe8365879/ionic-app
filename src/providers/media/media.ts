import { Env } from './../../env';
import { Media } from './../../class/media';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {

  constructor(public http: HttpClient) {
    
  }

  getMedias(){

  }

  getMedia(id: number): Observable<Media>{
    
    return this.http.get(Env.site_url+Env.api_url+Env.media_ep+id).map((rawJson: any)=>{
      
      return {
        id: rawJson.id,
        title: rawJson.title.rendered,
        details: rawJson.media_details.sizes
      } as Media;
    });
  }



}
