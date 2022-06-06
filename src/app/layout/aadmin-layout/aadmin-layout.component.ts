import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/srvices/authadmin.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './aadmin-layout.component.html',
  styleUrls: ['./aadmin-layout.component.css']
})
export class AadminLayoutComponent implements OnInit {
username:any
name:any
role: any;
_id:any
  constructor(private ads:AuthadminService,private route:Router) {
  
  
  this.username=this.ads.getusername()
  this.role=this.ads.getrole()


  // if(this.ads.loggedIn()==true){
  //     console.log("connected")
  // }else{
  //   console.log('not connected')
  //   this.route.navigate(['/admin/login/'])

  // }

    


  


  
   }

  ngOnInit(): void {
  }

  // toggleSideBar(){
  //   let e = <HTMLElement>document.querySelector('#sidebarToggle');
  //   if (e.style.width == '0rem'){
  //     e.style.width = '9.5rem';
  //   }else {
  //     e.style.width = '0rem';
  //   }
    
  // }
  

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('username')
    localStorage.removeItem('_id')
    this.route.navigate(['/login/'])

  }
 
  

}











// authadmin





// import { Token } from '@angular/compiler';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthadminService } from 'src/app/views/srvices/authadmin.service';

// @Component({
//   selector: 'app-auth-admin-layout',
//   templateUrl: './auth-admin-layout.component.html',
//   styleUrls: ['./auth-admin-layout.component.css'],
// })
// export class AuthAdminLayoutComponent implements OnInit {
//   dataresive: any;

//   constructor(private ads: AuthadminService, private route: Router) {
//     // if(!localStorage.getItem('token')){
//     //   this.route.navigate(['/admin/login/'])
//     // }
//     // if(this.ads.loggedIn()==true){
//     //   this.route.navigate(['/admin/'])
//     // }
//   }

//   ngOnInit(): void {}
//   loginadmin(f: any) {
//     let data = f.value
//     this.ads.login(data).subscribe(
//       (Response) => {
//         this.dataresive = Response
//      console.log(Response)
//         this.ads.Savedataprofile(
//           this.dataresive.token,
//           this.dataresive.data.user.name,
//           this.dataresive.data.user.role

//         );
//       },
//       (err) => console.log(err)
//     );
    // console.log(token.data.user)
    // this.dataresive=Response
    // this.ads.saveDataProfile(this.dataresive.token,this.dataresive.role,this.dataresive.username)
    // this.route.navigate(['/admin/dashboard/'])
//   }
// }















// auth servc


// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { JwtHelperService } from "@auth0/angular-jwt";


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthadminService  {

// ProfileAdmin={
//   username:'',
//   role:'',

// }

// isloggedin:boolean=false
  
// helper=new JwtHelperService()
//   token: any;
//   constructor(private http:HttpClient) {

//    }


//   login(data:any){

//     return this.http.post('http://localhost:3000/v2/users/login',data)
//   } 
//   Savedataprofile(token:any,username:any,role:any){
//     localStorage.setItem('token',token)   //stock local storage 
//     localStorage.setItem('role',role) 
//     localStorage.setItem('username',username) 
    // this.ProfileAdmin.username=token.username //get user name
    // this.ProfileAdmin.role=role //get role 
    
    
  // }

  

// saveDataProfile(token:any,role:any,username:any){
//  let decodeToken=this.helper.decodeToken(JSON.stringify(token))
//  localStorage.setItem('token',JSON.stringify(token))

// console.log(decodeToken)
 

//   localStorage.setItem('token',token)
//   localStorage.setItem('role',JSON.stringify(token.role))
//   localStorage.setItem('username',JSON.stringify(token.username))

// this.ProfileAdmin.username=(token.username)
// console.log(this.ProfileAdmin)



//  getusername(){
//    let token:any=localStorage.getItem('token')
//    let decodeToken=this.helper.decodeToken(token)
//    return decodeToken.username
//  }
 
//  loggedIn(){
//     this.token=localStorage.getItem('token')
//     if(!this.token){
//     return false
//  }
//    let decodeToken=this.helper.decodeToken(this.token)
//   //  let role=decodeToken.role
   



//     if(decodeToken.role!=='admin'){
//       return false
//     }
//     if (this.helper.isTokenExpired(this.token)){
//       return false
//     }
//     return true
//  }
 
  
// }
