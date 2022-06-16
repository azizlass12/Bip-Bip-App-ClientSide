import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  dataArray: any;


  constructor(private ds:DataService,private toast:NgToastService ) {
    this.ds.getAllmissionsforEmp().subscribe((Response:any)=> {
      // get all-comman
      this.dataArray = Response.commande

      console.log(this.dataArray);
    });
   }

  ngOnInit(): void {
  }
 
  Change(_id:any,i:any){

    this.ds.ChangeCondition(_id).subscribe((Response) =>
    {
      console.log(Response)
      
    }, (err: HttpErrorResponse) => {
      this.toast.error({detail:"L'opération a échoué",position:"tr",summary:"Vous avez déja envoyé une demande",duration:5000})



     } )
  
  }
}
