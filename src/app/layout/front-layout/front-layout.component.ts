import { Component, OnInit } from '@angular/core';
import { AuthuserService } from 'src/app/views/srvices/authuser.service';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit {

  constructor(private aus:AuthuserService) { 
   
  }

  ngOnInit(): void {
  }

}
