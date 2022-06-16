import { Component, OnInit } from '@angular/core';
import { AuthadminService } from 'src/app/views/srvices/authadmin.service';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataArray: any = [];
  role: any;

  constructor(private ds: DataService,private ads:AuthadminService) {
    this.role=this.ads.getrole()

    this.ds.getallcommands().subscribe((response: any) => {
      this.dataArray = response.data.doc;
      console.log(this.dataArray);
    });
  }

  ngOnInit(): void {
  }

}
