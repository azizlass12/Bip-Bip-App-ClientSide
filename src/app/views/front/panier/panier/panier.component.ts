import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/srvices/data.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  id: any;
  onecmdArray: any;
  commande: any;
  commandes: any = [];
  _id: any;
  dataArray: any;
  constructor(private ds: DataService,private toast:NgToastService) {
    this._id = localStorage.getItem('_id');

    this.ds.getAllCommandesOfCurrentUser().subscribe((response: any) => {
      // get all-comman
      this.commandes = response.commandes;

      console.log(this.commandes);
    });
  }

  afficherCommandDetails(id: any){
    this.ds.getCommandById(id).subscribe((respense: any)=> {
    })
  }

  // delete(_id:any,i:number){
  //   this.ds.deleteCmdForClient(id).subscribe(Response=>{
  //     console.log(Response)
  //     this.dataArray.splice(i,1)
  //   })
  //   }


  ngOnInit(): void {
    // if( history.state)
    //  this.commande = history.state
    // this.roter.navigate(['/profile/panier',{state:{data:this.tosend}}]) // put this instriction in parent component
  }
  delete(id:any,i:number){
    this.ds.deleteCmdForClient(id).subscribe(Response=>{
      console.log(Response)
      this.commandes.splice(i,1)
      this.toast.success({detail:"commande",position:'left',summary:"commande Annuler avec succés",duration:5000})

    })
    }
}
