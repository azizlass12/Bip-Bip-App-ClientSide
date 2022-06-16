import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCoursierService } from 'src/app/views/srvices/authcoursier.service';
import { AuthuserService } from 'src/app/views/srvices/authuser.service';

@Component({
  selector: 'app-front-profile-layout',
  templateUrl: './front-profile-layout.component.html',
  styleUrls: ['./front-profile-layout.component.css']
})
export class FrontProfileLayoutComponent implements OnInit {
  username:any
  name:any
  verif: boolean;
  role: any;
    constructor(private aus:AuthuserService,private route:Router) {
      this.username=this.aus.getusername()
      this.role=this.aus.getroleu()

      if (this.aus.loggedIn()==true){
        this.verif=true
      }else{this.verif=false
  
    }
    
    // this.username=this.ads.getusername()
    // if(this.ads.loggedIn()==true){
    //     console.log("connected")
    // }else{
    //   this.route.navigate(['/login/'])
    //     console.log('not connected')

    // }
  
      
  
  
    
  
  
    
     }
  
    ngOnInit(): void {
    }
  
    logout(){
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      localStorage.removeItem('username')


      this.route.navigate(['/login/'])
  
    }
    
  
  }
  