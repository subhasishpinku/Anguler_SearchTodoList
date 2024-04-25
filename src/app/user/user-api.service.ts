import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http:HttpClient) { }

  signUP(userData:any){
    return this.http.post('https://rest-food-api.glitch.me/api/user/signup',userData);
  }

  logIn(userData:any){
    return this.http.post('https://rest-food-api.glitch.me/api/user/login',userData);
  }
}
