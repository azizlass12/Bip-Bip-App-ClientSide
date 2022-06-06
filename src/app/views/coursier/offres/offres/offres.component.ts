import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css'],
})
export class OffresComponent implements OnInit {
  dataArray: any;
  id: any;
  constructor(private ds: DataService) {

  }
  ngOnInit(): void {}
}





// this.ds.sendreqCommandById(this.id).subscribe((response: any) => {
//   // get all-comman
//   // this.dataArray = response.data.doc;
//   console.log(response);
// });
