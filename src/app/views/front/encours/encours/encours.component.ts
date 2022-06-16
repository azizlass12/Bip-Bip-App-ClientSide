import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/views/srvices/data.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-encours',
  templateUrl: './encours.component.html',
  styleUrls: ['./encours.component.css']
})
export class EncoursComponent implements OnInit {
  commandeID: any;
  employeID: any;

  constructor(private location :Location,private route:Router,private ds:DataService) { 



  }

  ngOnInit(): void {
    setTimeout(() => {
        this.route.navigate(['/client/panier']);
    }, 3000);
  }
//   goto(){
// this.route.navigate(['/client/panier']);
//   }
  
  // perform(commandeID:any,employeID:any){
  //   this.ds.perfomOffre(commandeID,employeID).subscribe((Response)=>console.log(Response))
  // }
  back(): void {
    this.location.back()
  }
}
