import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-create-cmd',
  templateUrl: './create-cmd.component.html',
  styleUrls: ['./create-cmd.component.css']
})
export class CreateCmdComponent implements OnInit {
  tosend: any;
  data: any;
  message: any;
  submitted = false;
  constructor(private route:Router,private ds:DataService,private toast:NgToastService) { }

  ngOnInit(): void { this.tosend=this.data
  }
  add(f:any){
    let data=f.value

    console.log(data)
   

    this.ds.addCommand(data).subscribe(data=>{ 
      this.toast.success({detail:"success ",position:'left',summary:"commande ajouter avec succés",duration:5000})
      
      this.route.navigate(['/client/panier'],{state:{data:this.tosend}})

      })
    
     }
     
     

}
