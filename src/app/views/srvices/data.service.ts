import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  id: any;

  constructor(private http: HttpClient) {}

  getallcommands() {
    return this.http.get('http://localhost:3000/v2/commandes/', {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 
  }

  getAllClient() {
    return this.http.get('http://localhost:3000/v2/users/' , {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });

  }

  addCommand(profile: any) {
    return this.http.post('http://localhost:3000/v2/commandes/', profile, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });
    
  }
  // getByIdForAdmin( adminorClientorlivreur ) 
  getById(id: any) {
    return this.http.get('http://localhost:3000/v2/users/me', {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });
  }
  getAllCommandesOfCurrentUser() {
    return this.http.get('http://localhost:3000/v2/commandes/myCommandes', {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });
  }
  getCommandById(id: any){
    return this.http.get('http://localhost:3000/v2/commandes/mycommandes/' + id, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });
  }
  getCommandByIdforadmin(id: any){
    return this.http.get('http://localhost:3000/v2/commandes/getCommande/' + id, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });
  }
 
  getCommandByIdforEmp() {
    return this.http.get('http://localhost:3000/v2/commandes/AllOpenCommandes/', {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 
  }

  updateUser(_id: any, data: any) {
    let url = `http://localhost:3000/v2/users/${_id}`;
    return this.http.patch(url, data, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 



    
  }

  deletecCmmandeFoeAdmin(id: any) {
    return this.http.delete('http://localhost:3000/v2/commandes/adminDeleteCmmd/' + id, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });
  }
  deleteCmdForClient(id: any) {
    return this.http.delete('http://localhost:3000/v2/commandes/' + id, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });
  }

  // updateprofilelivreure(id: string, newprofile: any) {
  //   return this.http.patch('http://localhost:3000/v2/users/' + id, newprofile);
  // }





  sendreqCommandById(id: any){
    return this.http.get('http://localhost:3000/v2/commandes/SendRequest/' + id, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });
  }


}
