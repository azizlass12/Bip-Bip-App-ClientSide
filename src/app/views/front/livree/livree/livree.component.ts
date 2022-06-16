import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-livree',
  templateUrl: './livree.component.html',
  styleUrls: ['./livree.component.css']
})
export class LivreeComponent implements OnInit {

  id: any;
  onecmdArray: any;
  commande: any;
  commandes: any = [];
  _id: any;
  dataArray: any;
  messageError: any;

  constructor(
    private ds: DataService,
    private toast: NgToastService,
    private route: Router
  ) {
    this._id = localStorage.getItem('_id');

    this.ds.AllReachedCommandesforClient().subscribe(
      (response: any) => {
        // get all-comman
        this.commandes = response.commandes;
        console.log(this.commandes);
      },
      (err: HttpErrorResponse) => {
        this.messageError = err;
        console.log(this.messageError);
        this.route.navigate(['client/notfound']);
        // right: 66%;
        // top: 86%;

        // console.log(err.status)

        // if(this.messgError) {};

        // console.log(err.status)
      }
    );
  }
  ngOnInit(): void {
  }
  detailsdatacmd(id: any, i: any) {
    this.route.navigate(['client/datacmd/' + id]);
  }
  details(id: any, i: any) {
    this.route.navigate(['client/offres/' + id]);
  }
  delete(id: any, i: number) {
    this.ds.deleteCmdForClient(id).subscribe((Response) => {
      console.log(Response);
      this.commandes.splice(i, 1);
      this.toast.success({
        detail: 'commande',
        position: 'left',
        summary: 'commande Annuler avec succés',
        duration: 5000,
      });
    });
  }
}
