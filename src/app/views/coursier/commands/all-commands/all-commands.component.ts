import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-all-commands',
  templateUrl: './all-commands.component.html',
  styleUrls: ['./all-commands.component.css']
})
export class AllCommandsComponent implements OnInit {
  dataArray: any = [];
  // datalivreur={
  //   FirstName:'',
  //   LastName:'',
  //   City:'',
  //   Longueur:0,
  //   Poids:0,
  //   Dest_FirstName:'',
  //   Dest_LastName:''

  // }
  // messagesuccsess=''
  constructor(private ds: DataService) {
    this.ds.getCommandByIdforEmp().subscribe((response: any) => {
      // get all-comman
      this.dataArray = response.data.doc;
      console.log(this.dataArray);
    });
  }

  ngOnInit(): void {}
}