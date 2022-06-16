import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/srvices/data.service';
import {MatDialog} from '@angular/material/dialog';
import { OffreDetailsComponent } from './offre-details/offre-details.component';


@Component({
  selector: 'app-mesoffres',
  templateUrl: './mesoffres.component.html',
  styleUrls: ['./mesoffres.component.css']
})
export class MesoffresComponent implements OnInit {
  dataArray: any;
  id: any;
  _id: any;
   

  constructor(private ds:DataService, private dialog: MatDialog ) {
    this.ds.getAllOffreforEmp().subscribe((Response:any)=> {
      // get all-comman
      this.dataArray = Response.offres

      console.log(this.dataArray);
    });
   }

  ngOnInit(): void {
  }

  openOffreDetails(offre: any = null) {
    const dialogRef = this.dialog.open(OffreDetailsComponent,
      {
        data: offre,
        
        
          
          





      });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
// getOneOffre(id:any){
//   this.ds.getOneOffreforEmp(this.id).subscribe((Response :any)=>console.log(Response))
// }

}
