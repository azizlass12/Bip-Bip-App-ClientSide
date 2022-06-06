import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthuserService {
  token: any;
  helper = new JwtHelperService();
  role: any;
  constructor(private http: HttpClient) {}
  
  registre(body: any) {
    return this.http.post('http://localhost:3000/v2/users/signup', body);
  }

  login(data: any) {
    return this.http.post('http://localhost:3000/v2/users/login', data);
  }

  saveDataProfile(token: any, role: any, name: any,_id:any) {
    let decodeToken = this.helper.decodeToken(token);

    //

    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('username', name);
    localStorage.setItem('_id', _id);


    console.log();
  }
  getusername() {
    let name: any = localStorage.getItem('username');
    return name;
  }
  getroleu(){
    let role:any=localStorage.getItem('role')
    return role
  }

  loggedIn() {
    this.token = localStorage.getItem('token');

    if (!this.token) {
      return false;
    }
    let decodeToken = this.helper.decodeToken(this.token);

    this.role = localStorage.getItem('role');

    if (this.role !== 'client') {
      return false;
    }
    if (this.helper.isTokenExpired(this.token)) {
      return false;
    }
    return true;
  }
}
