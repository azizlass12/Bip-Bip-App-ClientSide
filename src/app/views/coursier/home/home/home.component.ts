import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private location:Location,private route:Router) { }

  ngOnInit(): void {  setTimeout(() => {
    this.route.navigate(['/coursier']);
}, 3000);
  }
  back(): void {
    this.location.back()
  }
}
