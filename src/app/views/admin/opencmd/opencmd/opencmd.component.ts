import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-opencmd',
  templateUrl: './opencmd.component.html',
  styleUrls: ['./opencmd.component.css']
})
export class OpencmdComponent implements OnInit {
dataArray:any
  constructor(private ds:DataService) { 
    this.ds.getCommandByIdforEmp().subscribe((Response:any)=>{
       this.dataArray=Response.data.doc
    })
  }

  ngOnInit(): void {
  }

}
