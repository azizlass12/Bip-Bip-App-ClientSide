import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-closecmdd',
  templateUrl: './closecmdd.component.html',
  styleUrls: ['./closecmdd.component.css']
})
export class ClosecmddComponent implements OnInit {
  dataArray:any

  constructor(private ds:DataService,private route:Router) { 
  //   this.ds.getallcommands().subscribe((response: any) => {
  //     // get all-comman
  //     this.dataArray = response.data.doc.filter((e:any) => e.LivreOuNon == 'false');
  //     console.log(this.dataArray)
  //   });
  // }
  this.ds.getallcommands().subscribe((response: any) => {
    // get all-comman
    this.dataArray = response.data.doc.filter((e:any) =>e.Statut=='reservé')
    console.log(this.dataArray)
  });
}

  ngOnInit(): void {
  }
  delete(id:any,i:number){
    this.ds.deletecCmmandeFoeAdmin(id).subscribe(Response=>{
      console.log(Response)
      this.dataArray.splice(i,1)
    })
    }
    details(id:any,i:any){
      this.route.navigate(['admin/details/'+id])
    }
}
