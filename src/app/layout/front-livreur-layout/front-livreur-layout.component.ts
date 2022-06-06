import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCoursierService } from 'src/app/views/srvices/authcoursier.service';
import { AuthuserService } from 'src/app/views/srvices/authuser.service';

@Component({
  selector: 'app-front-livreur-layout',
  templateUrl: './front-livreur-layout.component.html',
  styleUrls: ['./front-livreur-layout.component.css']
})
export class FrontLivreurLayoutComponent implements OnInit {
  verif: boolean;
  username: any;
  role: any;
  constructor(private aus:AuthCoursierService,private route:Router) {

    this.username=this.aus.getlivrname();
    // this.username=this.aus.getlivrrole()

    if (this.aus.loggedIn()==true){
      this.verif=true
    }else{this.verif=false

  }
}

  
  
  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('username')


    this.route.navigate(['/login/'])

  }
  toggleSideBar(){
    let e = <HTMLElement>document.querySelector('#sidebarToggle');
    if (e.style.width == '0rem'){
      e.style.width = '9.5rem';
    }else {
      e.style.width = '0rem';
    }
    
  }
}
