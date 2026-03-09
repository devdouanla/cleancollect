import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user:any = null;

  login(email:string,password:string){

    this.user = {
      email:email
    };

  }

  logout(){

    this.user = null;

  }

  isLogged(){

    return this.user != null;

  }

}