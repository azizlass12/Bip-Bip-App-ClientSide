import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor (private location:Location, private route:Router) { }

  ngOnInit(): void {  setTimeout(() => {
    this.route.navigate(['/coursier/mesoffres']);
}, 3000);
  }
  // back(): void {
  //   this.location.back()
  // }
}
