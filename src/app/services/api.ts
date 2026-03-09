import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class ApiService{

  apiURL = "https://api.cleancollect.com"

  constructor(private http:HttpClient){}

  getPosts(){
    return this.http.get(this.apiURL + "/posts")
  }

  likePost(id:number){
    return this.http.post(this.apiURL + "/posts/"+id+"/like",{})
  }

  addComment(id:number,comment:string){
    return this.http.post(this.apiURL + "/posts/"+id+"/comment",{comment})
  }

}