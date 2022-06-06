import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  dataArray: any = [];
  name: any;
  datauser: any;
  registerForm: FormGroup;
  _id: any;
  constructor(private ds: DataService) {
    this.registerForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      role: new FormControl(),
      phone: new FormControl(),
      adress: new FormControl(),
    });

    this._id = localStorage.getItem('_id');

    this.ds.getById(this._id).subscribe((response: any) => {
      // get all-comman
      this.dataArray = response.data.doc;
      this.registerForm = new FormGroup({
        name: new FormControl(this.dataArray ? this.dataArray.name : ''),
        email: new FormControl(this.dataArray ? this.dataArray.email : ''),
        role: new FormControl(this.dataArray ? this.dataArray.role : ''),
        phone: new FormControl(this.dataArray ? this.dataArray.phone : ''),
        adress: new FormControl(this.dataArray ? this.dataArray.adress : ''),
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
    });
    }
}
