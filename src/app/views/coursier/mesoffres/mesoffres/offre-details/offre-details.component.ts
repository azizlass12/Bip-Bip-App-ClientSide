import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-offre-details',
  templateUrl: './offre-details.component.html',
  styleUrls: ['./offre-details.component.css']
})
export class OffreDetailsComponent implements OnInit {

  offre: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<OffreDetailsComponent>  ) {
    this.offre = data;
    console.log(this.offre);
  }

  ngOnInit(): void {
  }

}
