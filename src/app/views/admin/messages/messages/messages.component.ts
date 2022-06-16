import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  dataArray: any;

  constructor(private ds:DataService) { 
 
    this.ds.getAllMessagesFromClient().subscribe((response: any) => {
      this.dataArray = response.data.doc
    });
  }

  ngOnInit(): void {    }


}
