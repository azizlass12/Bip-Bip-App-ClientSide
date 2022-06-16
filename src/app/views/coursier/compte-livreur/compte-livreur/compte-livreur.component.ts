import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-compte-livreur',
  templateUrl: './compte-livreur.component.html',
  styleUrls: ['./compte-livreur.component.css']
})
export class CompteLivreurComponent implements OnInit {
  dataArray: any = [];
  name: any;
  datauser: any;
  registerForm: FormGroup;
  _id: any;
  constructor(private ds: DataService, private route: Router,private toast:NgToastService) {
    this.registerForm = new FormGroup({
      Nom: new FormControl(),
      Prenom: new FormControl(),

      Email: new FormControl(),
      NumeroTlf: new FormControl(),
      Adresse: new FormControl(),
      Gouvernorat: new FormControl(),

      Ville: new FormControl(),


    });

    this._id = localStorage.getItem('_id');

    this.ds.getById(this._id).subscribe((response: any) => {
      // get all-comman
      this.dataArray = response.data.doc;
      console.log(this.dataArray)
      this.registerForm= new FormGroup({
        Nom: new FormControl(this.dataArray ? this.dataArray.Nom : ''),
        Prenom: new FormControl(this.dataArray ? this.dataArray.Prenom : ''),
        Email: new FormControl(this.dataArray ? this.dataArray.Email : ''),
        NumeroTlf: new FormControl(this.dataArray ? this.dataArray.NumeroTlf : ''),
        Adresse: new FormControl(this.dataArray ? this.dataArray.Adresse : ''),
        Gouvernorat: new FormControl(this.dataArray ? this.dataArray.Gouvernorat : ''),
        Ville: new FormControl(this.dataArray ? this.dataArray.Ville : ''),


      });
    });

    this.registerForm.valueChanges.subscribe((value)=> {
      console.log(value);
    })
  }

  ngOnInit(): void {}

  updateUser (){
    let user = this.registerForm.value;
    console.log(user);

    this.ds.updateUser(this._id, user).subscribe((res: any)=> {
      console.log(res);
      this.toast.success({position:'left',summary:"Modifiier  avec succés",duration:5000})

    });
    }
}
