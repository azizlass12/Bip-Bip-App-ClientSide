import { HttpErrorResponse } from '@angular/common/http';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/srvices/authuser.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css'],
})
export class RegistreComponent implements OnInit {
  messageError: any;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  emailPattern1 = '^[@[0-9]';
  loading = false;

  email: any;
  constructor(private aus: AuthuserService, private route: Router) {}

  ngOnInit(): void {}

  registre(f: any) {
    let data = f.value;
    this.loading = true;

    this.aus.registre(data).subscribe(
      (data) => {
        this.route.navigate(['/login']);

        console.log(data);
      },
      (err: HttpErrorResponse) => {
        this.messageError = err.error.message.errors;
        console.log(err.error.message.errors.adress.message);
        this.loading = false;

        console.log(err);

        // console.log(err.status)
      }
    );
  }
}
